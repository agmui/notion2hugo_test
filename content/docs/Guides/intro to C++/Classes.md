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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4VYUV4A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2FjNsvB3BwWe9DWJwJQe%2Bv08ALlYXrWBo7p244jjgRgIhAKsBJigum%2Fefdi99j0vW%2BwhoYZ4cVP6imdnbFfcgZz4IKv8DCFkQABoMNjM3NDIzMTgzODA1IgxCiv4W5d99AdR5hRoq3APoeNUVsqL6hsDNhSo8rDGS%2BDUiaLY%2FfdXUEyrrJ%2BKidl0MJBiNbZm%2FySxbNrTcNCobmEZTDtr%2BXQDwmVsPRsm%2BTcYJPgezRASn7%2ByQuYCdqvAw4ZCGMKgQJ%2FDzAmjugj7t3OA%2Bb%2FwhFfm%2FBhBYcTm3hM%2Bim6xPAhqu1L2xQbXg57G5%2F0XW3EmbyEiv4cluo4ywsUsmCuW0VMehIWBh7NZi%2F63CbR%2Fgpuwk%2Be4hpZakZMhCxsgVAtZU8KH2VsqtlRwsIC%2BSvR5QiQBRZvjMl2nrf123UykuPNtVNZ8w0sr4zLLw3wXFmY1njllrwSyj%2FsdpwEjSNBaHP2vyqD4f5M%2F1jM7BDxdLxTFp9hWNSCDsl2gDAWsrM7j0fmXZpeXbc6yrT%2Fo4RE550zO7H2zCPEPDRkdPB%2BOedTlBErUH1mMD1OCFsQl7VahAJNsseJjvcVom75r3OfDk2n6A8Gsc7K2PN3nP1LFvD7n1kKiD0v24j2tVD25S%2FMbhu4oS3wpvmefZnJWOVfw5ezs%2BnhbUT4usE31l5oK8NmFT0Lx5wXJe9bfa04ZfvMqZLWzLSAXXZVnnxWvD0RyUZa2xsz7X8PhuVIE%2FfzTS%2BsBOHM7qWDUFqb4ce44%2BYOPPQU4bDTDt2dXBBjqkAcnxnUAdpxIwgxjFuL1LaNzS1yWOrfrzet0ZAHe7c%2FvrSgKogM7wFfM15RmU%2BwIxHK0ZG0lJAX8O10oCNNFBLWpnRAxXTmtdfRChmTIQCdF%2FtVYwpXZCMnnolJc9UPeGz1le6Su5u7TjjErytKZqmvHwDhos6MLSJ5uQhk%2BEBVIP7JiskuzY%2B30h1Q%2F%2BuW%2BxEjrc1%2FB0OjLn020CIN38SwKkaVIC&X-Amz-Signature=78a7d3d45f7d05438eeac7fc51945a9c2868524c97bb142392e6742c617d5b70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
