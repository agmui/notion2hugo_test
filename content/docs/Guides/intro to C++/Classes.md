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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKHLDZHF%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRAUmNjrFdpxhwSUJDT6XMQmQL66r8uC85loZYd5NKFQIhANMG06YabXh31k%2Fu7yf5%2Fw54khUXPKoQqTY6ZPg7Xez6KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSyr2TQ1gGUR7d3Ogq3APiwEiPZtIy%2BFRdUp60tSKNJVfVxuCXscNfnwT9se0c1V%2BujH25kNlIaUhOZcjma5Pn%2BVFQOsQM5x2SPbcyVj5%2FtTw2OArmrN2Yt%2FlfEJPYHtRCjZ4PxjfINv0Xgk4n23FTPbmKze1HtEy%2BhgwKKaVrMuupeOxvdjs8rjMtDc9CHIbYoD0UKaLO3cN6EbqMLb4HVIhz23BKxeNkJoHE4ozNFLvmw0MqUcUG4wH8FPYsHWm%2BQ6a5k9qsQlupAEO%2FWZQP88%2FL4CI%2BD1s8Ucxyt3WI8zyURqPynKqIdWYQHcZCBkCixXXKTEMNjQ3VTb%2B6FDZm95ysVlPDkOyRoG44tsM7bnuc%2BCDgxmNQuhctz0OBaiAmdiyPw9OGKpU7uwHh2ya9A%2B4eEOTDc2rFOTbSjnZ%2Fawg1twxsySMGogFzgfFcSGHRIgerrlTCepm4IBQRiekPZZ%2BAk%2Fb3mwhP5lEpFzP0tHNlI6KL0YqHQ6jyNfLoR1FtgVMVv7KAUb5TUmeRr4%2BKTtfnrlAgMSTtNBtqq8ZNonR%2ByNxSVfORzjbFHc2Mwv4snWwnRcC7NYZJmR9jezEDWdpuIqlh4Nw6gpU2wFmy9UroybbFSW38OMMBpWPNR13Z9CdArqYcXYsiyDCZnpvCBjqkAc%2BjeFOUsx7v9gDWkmRAAkTuvn%2F4J%2BrTDAREbVki%2FvNxuWQLTqAXIkTZB9CMkRGv0BLk1MAGaG2hhUwsRvCE2X301Lft0UMXKjxpWAKJR3zJMRsnehSaMb%2FuOyAhzaREZjKataq1a7NVGfU%2FTw62yKHKNtlNc6oOzTulJizu1L6jjxgz2RydmNdkPMEQgtb4pVJoRjmkrlXdNppu7oEkye%2BW65Hs&X-Amz-Signature=d512118ef901809be9eb20415263ce08cb78330eb0629b9df5e2049ab1075ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
