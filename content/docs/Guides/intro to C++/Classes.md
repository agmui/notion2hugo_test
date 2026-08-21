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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HG6MBD%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQPHutMO3ELK%2Fd3MlXnd93EUMa0zx7J%2BXwBxXsdditNQIhAIthp0WFaUK4AtWMmvSXdXHROGmoNoVqcVIzA7nnyAugKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwS%2BfX6NFg%2B9nLiaUq3APGiXjWUKJl2Rya%2FXLKRa89%2FsYpcAknuudjyAUEGgtcypm6diogDAlrfpR1PlaibypweGhJv6ELxnRZwrjUS6VnBcdSpGWCd6rRfVOHzoB8jh%2BHBbn38CWjSKyqZHC5%2BO2%2FHAbtEvR9%2BxLlvjcEHvzkAa9kA0tcq6yg7lAgJPXIB2GGRVeGOMKZxdd9T67ONWbIonNYTc7C6%2BRfGEKKwXCrnBZH%2FcORIzCkuXT2jf9ONV1YPfiWCdzyjC7LHrIT6D64mnucTCm5I7DBzvLV54YQvEywrdo6WVtWacJ4Rxdh7illBdav1GXiGUXrsgS5ykYoBJ8lN5yDJa2MpbENblK6t4b0%2FptjAMpWPmHm0xim4ndDhQJ6xfh%2F66I3eDJi0KDWfldAmzUvzmyyyEDqH5GBZSgqqgWvEKyYGhmXVnx7GRDLcWD9qhR0qhNY22nJDJ69GTNsqvxt3ADTK15dhYhber3BGsYA%2B7xfyz2dNE%2BwzgTOstbW0AU%2BhGlru9ueC%2B%2Bbrvw8zBLzowmpZHLqxz2J5Mqbiy4ZZINvGPmA0JxmJdoa2D%2BCCRQYlGJsUoi7e9Fmz7VXX3RvTCPu%2FisLxull0qT1Zo2weRTdPEwzya0QguecBL16oDmsZGjt1DCbr57UBjqkAfLk9wQkVQBk3HbgIJ1EWtO7WLN3DjrsNOR%2BkEjP3bHFkqcCGihNXr0lsMtfb%2F6cvwF7%2BhRrU%2FKlT4%2FhYAMgffG5zu9cVLaCQQ1rmPaK%2FHQSLN1v9opA%2FYaAspZjiLkiWx8vcBB%2FZlUOJMeC98m%2BmG41zljWniBd%2BN6SKt%2BVWcqy8VqrHKYSPkGLRcffPHfYAkwkyjuo0dGONNWiHeeTk5FpbHM3&X-Amz-Signature=f211fd31b8cc41c6602fb6e8bd6aeb1048158734ff79262935ba1f25d832f89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
