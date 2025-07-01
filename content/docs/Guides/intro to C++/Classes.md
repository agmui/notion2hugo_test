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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJJQNB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUta%2BMoBEo%2FaotmMPPg1TW83mTcD6yxK%2FKm7NvCpFoFgIgW6IEJIeHkgnZC932SnuYq7xUBXR%2BA9q9zdv7%2FSbsAPUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdOKvpw1HjV%2Bnga3yrcA6CIfaRoMXPMrQAQ47%2BUAgZ%2FijQ2NxZVCNoOsAe%2F3CM9XkGtvmdzwlbpJTfT6oNGwKk1MIf9rbcBv3S1ALiI4xkVvZJWmWJA8JtO%2Bqsmp7zOzAU8rM2NGq1jCVVVPd8s0z6xm%2Fa5T14VZqpesOsYVcZYnMot71HjSFRUl5dbg000n7sO4cEZUBHa364PuazC1SKgdTrcg01Fj6ZZjydIEY6xg8dznmMaiEJUe8%2BtMTHBDyTVFIB2yVMGsrD4zPMU9qSMnYLVespMeCLblOWCIugR%2FhjOjcWuOn1e%2BSbI1iD7geFHo48vCtiYhj%2BRue9LxWJe%2BQwF1bIPnSzHGt%2FkJBFJc2ELfqwelaX%2BYDMZBCJV0tGnhtp7LlbDNGQlhtdWyzUVu8imbJ76Hem5PS8M7AnpwL%2Bd6AbnEJF6%2FAtYmcEGaWBGAGhdLKyciUM0aR0LTSLAb5%2B7NULjc0UFQt%2FyKj1ltTV3rDKNOtnJd%2FX2yq17Cmb5vCb55rxAvfvpkEB8I5n0O4svgrpE26HWFOBN8zoFO2s5dx25uF%2FoTkiOJ1vcOtjLk7035tPN61rXNDYuLnUxv81qBh0LdCK5Rixa7R7fwqdpqDYhJWJ270ywvseghV8swHdjIiKisb8jMKDEkMMGOqUBJs7LzQfJbKe03TCRyhw6lcIMwoEcZBVSYj56w0yHd5qbGEwJ25K3oWRv3YCSr4Nm7JkMWfxCT1bNvMhfvH3kIQiW964uJqY%2BflopnLqtWSDoM5Xo1Rzt8XJRt6EjcskREQICLEZP9BKoQfHQZJ3YCBeM%2B%2FyP3y%2Faub9P5OKzcCfZNe7%2F4ohtYhDG0weAlInKpOIKxIZYqSsYsbJA1buxhrbe5dR%2B&X-Amz-Signature=238e62ebe1bc2993c3f0381c15f01d6cb2a87b3f3d74a9f9eb680bf8e27a2d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
