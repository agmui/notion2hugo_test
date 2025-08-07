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
      <summary>What is </summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQIQRQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBHYn0Xx9R0dH4L6TZDAJrsfJdFYH4Cdi5UMOePlFc6YAiAmR%2BE6G1%2FzmhqOLQNe4eCe3981pfdHBlFOznlRnJQYgSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrpwiksyRZAWkd33ZKtwD7SoWYYeV6XgtFBjtbZNqyN7kX47B%2B7jLd1yQjJ1UjFSakfAC8ZyavVKvD%2Fw9fRdrdmEgA%2B%2F1iU4e9BVI%2F%2Fe3iaso7rp1%2BlP9sPjnRVlpvcGF19Ed6hx4R9bNd%2FyW77PbHdyGtLdJOEb6gxvqR%2FmtNxQiuW7esdYkMLPOuI8CmHeKtHsE4JJj3fT0w4BpFiYkukMRmLDSsgLkEcUCHDUUtQryJ2tmwvlVIiz5o6cXEvHyhWwJpfX5p9WpxLVe2ToZU85V4xjaDMIxKxDLywmzzkqBWGkT6gCI%2FmPVk5TzkfDqwMXgqM32pVgX0fgUzu315%2BzNKp3N2nX8P00JAa6RZNi5k4GsbdnumxwuemKXKicdRtWTFsp4G7eG8AP2Ry9pSvRL9veiFyft0PXlzS%2BqomwykEhrHDSgnF4lBjvarrg8r76GEovREOFrYtspYl8d6K5dMLj1ULq%2BiTwktg9mV2iqEVKyR0D3o9P9iY%2FtHQEwp7l0Nqgf9g60bkhauk%2BPPfeK7aXp%2BDUMTR%2Bvw3YtVnxbbINW%2FaO%2Fg%2B29hfMLal4vgUuEmRZOlP0gyltc%2F6XW0wS8n3xCHJ0rBMF8RjvOpCU92q2XWFxxAQeoRQfMGTvT9fLYI7vXypQibXIwq7XRxAY6pgFzkXGysWhrQlr8OOqOVzqAU8Kk1Lb8RSVyrP2cey02QtPnjvIRJXbMSFk7N6%2FdHSjnzHqcIqv0JPyopBiy2higF3JMu0WsmFCuUOMvSWFiPjDctMp2av03%2BwGWB87FVs%2Bu57tfwpqzXqECDWObZfTy1GZ%2Fjc8LNIwj9Y4%2BC7rucKkzC60HNwXV70lJir8M%2BMKr03am%2F%2BUQ7b%2Bf9ILwY%2FKuslgsrN4j&X-Amz-Signature=85db7baf565705fc34e14bda55524525449f20a49c63d925343f6b5d49ada3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
