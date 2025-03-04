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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKZPKKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEOfvXPiqlRWYaFc6he6%2B0AoG7fCnOlbdB2v2JQVMHEAiEA2Om6sjnKZVtUfJhGykt0W1Z17RbVyyijucSc2y5Ik6YqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4BWcB3SHdwgEPp%2BSrcA%2FUOlR%2BTVJ4b%2FU3LlZb4RoQq1t513hbDRmxaBCl67quLdISiOrpD7suBUlPjVfg6odG8BXiwJjH2xFH9EM2j7lR1W3LHU11tjO1JSyNq%2BhGiwNdAMAq%2FzHr04dMSpbf0qoDm86ftVxDgufvM9XOBbM6QbZqXHicuFri7UqkJeU4tqgY%2Fzee6A3YJndgGJHbVaHd%2FxwnYXTycNMdgl9yZfuI0OiI7B5IJyn9TJMadwdqBozGFZTPtDyXIX1uioEsSahJYb3LUcu%2F7SsJke%2FhcgXUSDfqeotaDms7uI4bO3yU4pTbcnp6RWvVQlVJheWAw1F%2B5XoX1CNSutgnLXlzT39cjBfC8uzvl%2FomznzCFabcjzqGkDr%2BRwafYNqUEcPW0p06BIXJ0RnsXd%2BEUYwtfiBqHOFPolGqCaCeAVmuj4zvpNfRnBcRLVXquVKJ7PWkRDZmfHj%2BP88DFgJ6Vc%2BLhHHWgdz28sMRJi0YXRKpWGz2I3%2BbbV1uw7iAd0GlpWmY1AzDgKG44UNCO6dWQG35w0cYA4vkv0SiY5A%2Bna6coIqY3ud%2F0qO%2ByBPyGNU%2BGJiiUDf25eNbnUvlnPxkIdmtnOOtsquOC5uI53smECmr5es2IshEIteIZG%2BBrR4B2MM7%2Fnb4GOqUBn5UqkBTggjtv2dD6qcUQM7n6PteoUuvhfqLQWHUU%2FtqjOiusL5%2FcJmhdfMqSTD3NnL0ClowWetmG0Bx4RjQSAh3Z2BFISL72eGCHb66KoIgPSDgGVv4IDRboBfc1nfPpTUOUsNuFqqkM29mUXLfTH2ZXFobznzVFeBrkYBI3surUsD11on1LK2%2BgvnXdOkMYlfoT9ro5Z0LzZBRCLcprctJJWbnm&X-Amz-Signature=449f6871f959c69d4b0b24793f54e86374da81eb542e179bafda9e9612fe323d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
