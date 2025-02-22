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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRUAPIG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE03RuxWGNrmKUCiH7Tyd70g0Dbh3teILYq9dZp8wCUfAiBZWWPGg%2BHnMLQ5luSvuAMriIQWA%2BwHFhnVE2UqODQgEiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIZX66jI0I6Jkf233KtwDHzNRcfsXJMI1k9HCndpbzOwT6e33B2dd%2FbFplVvs1KmgB5fJtiUvXjQDpSy%2B3oSvDJBGvf1TaANsON75bBq3Vxpw9dm7cVF%2Fx4KpyEwmadCgS%2FIv279Vu3hOmpXRhlrourQ4Ok1v8V0%2B3%2FM9wr0MeSwcsYNJcqikds9%2Fst1XboUblu6v6O55LQTMdSbdFOf65S5Xksoacd9HXsbQHm43rhVWT2tQND3tYy2BukQhHyZ2Pvull%2Fs6WFHLz01sCUkprsaYGjpaCzeDmZ5f%2BlYYNf9vuz1UI3Vio%2FQ6vHl40BU4hwfSrt%2BR4JDqQ1JpquCPEz9vbO2%2F9HkM2BiELcOQKL0VWS2ZZ%2FYlIHZGEC5TXJG7WIUnq%2BmWwvAdtsXP3wE%2FIHua2sdHioqCXsW1bnNSOuMStmMTj7hB8rELibsKGPpE6TgAibXmY1IJyD4V%2BTIm3VknPMS%2BZcJnrL%2BfTHjCBDeYXWQA7EaexFiEK1aL2i05AsTx49kgzPpzwvkUqDiNg7xMOlKpfQlFO2%2F94jomgIeEu5OnQwrBlZFLkNjhnT9UciRyGeTOGEfhBqemmgsG7K44PMFOuYL25kOzFqpMLab9cjZsw%2BROwkLnYdCg%2FnXpjRoiR991vfLUvDYwzLznvQY6pgGJKl9VF8c9l%2FlRgbxZQhoJx6y9XD747k3f%2FREe59u8elaCDaZPyumOzIzg%2BUasbOnuejMR1pJAgtBU3N8vQOc7DkrPTxqi3lqfVJ9IaxhDVETDfq0IydCWzssKbHiwUVKPPba60fifbZHJ1HjPb8fKeFuClY3HQMtCP7%2FW6YGjlVLfx5cOtZr4ZzIDSqfSWRB0HK3xY8%2BexKFd7vfpxC21LV1xiWvI&X-Amz-Signature=6a6f6d333578213210a76ce59aaf5bb0afc467651f1fb414db412010eb327a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
