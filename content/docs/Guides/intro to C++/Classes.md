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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMBIWBI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBrB3lBUC%2BtIU1uNj3KySUh1DE6j9mba4De8wzeLfQfIAiA8s%2FikhZmlmOrYmtPZcp78vDR2MlHREAYL1EOwluh6uyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyZEn%2FsrJDftjKlLVKtwDAkumFlMMoF9WYRL1fqGlWkUl5X46JAk9N%2FYQvTz5tgiagXqQbCWIE%2BLuYzMxZfmSf3X%2BdFJgGki4JbLwNA4ZrBft%2Ba5Ffo%2BPATDpgrgn03NtzlOj8G%2BS%2BRe7MIE4Aaobq4VB4kYtbggoIYnDlHAjVpZv7scX4aRi6cXnYXaqciW57pQjWZi77I2Rq4unVIAMouqs00db1rI1XMaHvKiOPiJw0Y3g33vmu0YVIuBBBd321zFaSEn3ABHazEUtujFEfrg9Ezgy%2BZbSHc2HGyO4drhYgtGb%2FR67pYJlSOP1KlLPM%2BFVPFgBX71P6X2FS9fps7qx2GXEdg15eFV0TR%2FbUA%2Bl4B250feEXoxh%2ByI6zgwEdgFRojYYhpfhHzWf52W1NnahnPwH4sH5jdQtslwhlkL0ScykcdTo2xSbERJqJwm64ABnPkj2d8w%2BxMc6dJ4%2BD30Vm9MbQ762KyIA4MlA2DWeQVR%2Fyl66%2BX8B9x2N3Cr9HLNxE5SGv38SBD1FHWRG85fHZtnprdbamlA4LC2GOZBk0dzsBAGp4tvwP4X%2BwqpA%2FvXSlBDo5djiQeOLgJCtFH2YRNb0BlAvGm5zg0awgiwJTC13OsFC0DtvXKqZ0QPMhTOUR90%2BUTpMXWAwpezgwgY6pgHwtrUt7YahrvasJwCKqvra1rUT89rKAZ1Hh8QoDIR0pYpij13WKAKPJcJD2SJnuuUgo4W4Jk0LIJj4omy3Qn9I9LKz4jbbqRo4pqAxROe4ffDUyExRT%2Fnieo0S%2Bi7eCgBwQB523o%2BJHfPUd2%2ByGy9uIGVlK9rcnhowoaDDCTZ39AoqK%2BUE0EKIFao6bh8ILoLrLBSYYRJo76PYLeVQqHZb7oCZb7hD&X-Amz-Signature=d6f0200bb17cd05cc1fb9b00ffec5af3c9a34e9a1b142e443eaa4e70e02c6ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
