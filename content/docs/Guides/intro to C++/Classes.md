---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
 `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

</details>



## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GUW3KYJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfNszcjwmzDS5rjd%2BXlwj3qmRQhxszZ9ppcJEzbPK2QIgXW2fYkCCqCKdDQX07xQkTHxzksEYRzG%2BVrF3Gx8AacsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeDm8F2mZBSVpqAAyrcA%2BzRdhNcBDHMb2DBuitKFhUfybEFdQlA2FRfHmbScNXeeRu4P4FlgNIJ0odvFxRTLezmfC%2FGg5p0694vN5UYhwCyIQ7FOrYJEbKIeVmj7CD%2FnWYqQGWkI9vIwbUAUqDk3WorofnDrAuPkz13PvhGsVslIfNDdccssTV35h%2FIE8KRvV1Suhtyn9bvn3dNfy9j7Y4iDfJvXLaM6zMsAtFMhh8Ikqtu0RIotG3vDnmSxz4GDatmM3L4hjLFMxAAblVsfcF5TdV0yMR0GC%2FkXTByXd7YM1SRawmsLSwPkuvDs1E%2BO3UtVLaPlu21atAYZAgpul%2BR9pH5UpkDcasNedzV9zd0R8vgB1AT%2FLFJUeRpW0JbTifGU0rw6VWmgiRnfts0P7JEQLVEKDlGz8WbC5qkGmlOdxReSE2FVkTnwvqIDlCUbll%2F%2F39pSumyOzthXNWwumPQzAZIm25SmUwGDuys6KBMoPQKa1hVf1G2t%2F16Y5m7JAFuyDhYEwqrtMVgCGYCfGmPg0xVOe9Iysw3y8hFc%2BK8m2gLu0d5HJpczJT82R4kMU97uaj7wskeXJwcAsAk20RSewqq%2B3rvsFywc%2Fp7m8DDp1nOszc6mjMh3yC8wfM6PEj1uKLneLi8oe4JMMyXtcgGOqUBsR1eSzOJGK4jS2JgAUTCB3HJ%2B%2B3aWAl8vKO%2BKb6uedWSsQCvPfdk26IM1d6mHYO%2FDIfeR2tEcR5EhZP%2FoIFIdSJmaSV3FBMBBmakXtgjf0o3ZPkfLjxKHDrBIzgYeqcIoaH9eANxgmnxf0vDzN7Nzl%2BvKLoqfU87%2BlJ%2Fxh6%2Fh7LXN5jVXfyWQx364HV74ZtS2XlaO9Y%2BzSb5hA%2FCUbm7etaGAE2C&X-Amz-Signature=0c9b337a78fc6eee6bbea1406e308a188f54c087226154e7fcfc84f598ff4b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
