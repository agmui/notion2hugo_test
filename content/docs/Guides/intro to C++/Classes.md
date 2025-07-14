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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCTUWQT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCoEeIXYlQLrt5vQZmqm7z4lema5fAT0LOXPJgRscU4yAIgFAjMACKWSFcLYCUU8MJp2hBjxyef53OhRspdihcyAbYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKNvrJ6DABiVWY%2FEpCrcAzYu%2BBVGXdODWJsOHvTZsTT%2Blc5VNToDErU6BGJFir%2FcJ1IcdSphczyqbUpj%2F6vkwfqKqnzgSI8MMiXkiE4oaVg9je8GiOxHt6SyNV6fi8bZgm0FhJ%2BPjFaKcon%2BCS5bOWWDoVJVq4oV%2BRVsxgFV6Xg3NZVQU8QdsSNSnPeJHfq%2FyxlLoYv%2FTWONoGfRajh%2BvuFiNfKvtC78g2jf5mShFFuejT1LuNn5iqR%2Blguo7Z0rC4Wlp0ax4kJdE%2Bv8SInNPrnqCffZh4HW3z%2BJ5O2FK1dFtfOSrDVWF65Dip9WkrClrb%2BAEo1cH5kL6m%2FTOOW%2FR18kjcPdTCQ7V9B%2FYvkFk%2BJJu7DGHuSk6nG%2F%2Fi2gvB0HEnMbAr7Z7dDhDietZ5QR8p62YC40c94GpFL2spThH2uBSUyUnm9uyLqNeD2pabKqdbTluWN%2BQl0szC4bUm10Zvh9qCC07G%2BNQW3waZAWforBWDz85r4PLFoGjfVWurygqJizEPEPYwikreJmO00G6N0148DorYNF14%2B0%2FrZQeS61qJUqkLf6q6ZUzORElwfVUFbsoYC5O%2BCxm7mX6LdGCRg%2FdTqrlUNAvcGY94MNDA6lN%2F8zSZY4pYgc5ZQRzIKN2fxxkvtQu%2BpslA%2FLMMDb0sMGOqUBc35gxNDwzpDN%2BvaKzrUlpfUcti81iNJY89hIz4wh7SP0xtWvKU3xcMPwQnwaLa0fYNN91rEoZZ4JrdfFCmkpvNzQS0BelWXEX0ISA7qUY2j1YpUcw7GyRsXZkNYOstTNRHgTFcq4gwYqmMMbh%2Ft7ZfDUm%2FNkTNsT1BX3mHqe73PFZu1Sm230isW6qeWMWVu%2F%2BsPUW6I5evzddS0excD71JevvUTD&X-Amz-Signature=2bf5b9d7330c6a6caa4d8b5db79d933fe13565d822ea2251f2adfe516cf1ef87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
