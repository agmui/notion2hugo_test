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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NFSRTB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaWELisM516MBy61CMysQWk%2Faqm8gH7kgg6qGyqVQqDAiAJYs1sr8uj8MOtVFKZ85csiimBi7LtAeEvE1R13utLvSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMDEIYuYZyovNS47owKtwDSyO3zkIzqCSBewaPky6%2F9o7LmHxE0rV8nXkHL4sGvHCHKYomXG1zdiblOc7JZjfoY0AEIcUOb6wgYRcE0%2Bzhlzm73Xm99FhRDzGfGJkgM0VI8q2rFMSV7ZAhhkrXxZlHrK1h8aCgRLgKIu9eSHBNrse9kAgnWCRMRktzy2CaoUsgZ88sM7aiCGdegO1MXJ62BSwi0WadrsCF8jqmdOXbNzgZqm9xIIrDNS3FMk3iyaXiGwz8FKXVjI62oWZPZguLs9Cghl9oHyFLoeOSKl%2BykdE9%2Fl4S%2BAURjuCpp8LGPlYLXsXH3jroyCEgSdnYmIKR71n28hVoBiatyqX%2FhjBMWeyieHNLn8dMQXuLA7Pu5hrnO127UZvOx6D%2B2jPKwghZdBih7TS3VJQTMYuV9k%2FL2oSo%2FajJnzqMLgHJaIuMpJlpSNMI%2FywfQ%2FgqBN7MnrE1BT6vyPmg0MH4ZltpkX3ZKvkrdntj1q43xR%2B%2FpKCPqNywieDXgCwFkpaTIxLJEosVZbUD5mHhm6r%2BUQLUXIDzBRfdsGT6YqPQys8pV%2BOlgyOjqnsPhYy%2BpeqNgmcEqgpshW7F21mLpeUvRnvLQQ11oAG5r5IPpXQVspOBaJY945o60%2FLbtbb9d9RSHtYw%2BcCOwgY6pgERz1fP8dt05ca2%2Bo8gi2%2FZmiWYy2%2Ba9Dq9gljwtiVdjRTgcW7Su1ZotBYS6%2FR6lI%2Bi2MbUyGQYY2Uia6gmUMa6a9%2FRy%2BkFdlDuJEtkJp11QY3wk8m%2BnSVm47G83urp9lHCj2bRnG6MDXcajcBsdkbxn9jJroMoDweXQCGb22%2F6G3dF1aEPRg1hCmsYqtPhU8m2REoAJ%2FHXdsORfESiT61lP0%2FG44qS&X-Amz-Signature=8a4aa14b44797bc73f9ab615eabd2a0067b19a2f27a51d9fb00402d7ade8715d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
