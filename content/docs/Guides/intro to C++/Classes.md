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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DZSLEO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoI%2FJd5Dja64w00AejmORS0oolCB5tqULjgSBek6%2FfXQIgXHWrQZhnmuTGZYuNqm0zUCGfBXLPS1f%2B37rGXQccjYYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG%2FOzNEo%2B9lSiR4eACrcA9AVxrINbyPhBGKeWsInxWhx9GZdgJGPvEsUs%2FsigRsACsvFQ3m85gATUMskYzQjaNvf4PtCZoDfieB1l9qbE3AHEMGQJv%2B2%2BveQYe3c%2BNzljAbP0zJ6CtDBRqclOiYDsKbA2Hzulh6awwn5MK3p7zado4pzhdiGafofcMQCQaFZT7EPAYsm3l6QF1t2vC8d46yMoqYZmW4ccHn%2Fe1sdKwPVDBKeapBPUc6ZTY33K%2FvV3tpi5Bd6aTjwssRdc69gGasL0d%2Fxx5A%2BqG08tNyLNXKASV6%2FQKOa0uwlKDw0tRFZaUTSeSiuPhC1YBrdGvHOz7kQriuZKOKP3%2BL%2FrxOFQtAeJglTVqYQzM48j74cFteeL7kulnyTl1xPxRYfi0C1ts34t4x343I4%2BCYMyn3qqSMFDLLQrX6s9FwJzRWHaxOd%2FwSi539FWH87FCkPhoUnP%2FzOpkJjuKCWweqHqpwqFxP3PCKNTpoy%2Bag%2BHINXSmYBTa%2BbCC2REQizqCbTKajJLOpDJnUQ%2BTcopOKVMw4GHdtYZTPgpDkItebHB7PiB6ge2HTaKCe4DtkX75H4G%2ByXfvkN1PFc4giLX4s1xxlCJL01%2F%2F1XWuNLo2uVEp%2FuaAxaydfTBWKSIhNlfimsMPjL7L0GOqUBKU7LEhdyP9ObHet4KD9Bcnsht8BmklgQcMGQ8k0Zjlwfj1TpXSbBrDDT2j6hV40cVAz7NrhafRwpFXAT7nDQdCSyRtJMXDQ6RkAoO12KncWlS8ECGBpe2IbxuL1eRJ3N8S99k2rAjSZDhW7SnmAYfw85XtwEnQ%2BQQcDUkPLF6ogLkNkasuYcrv4%2Bq65zruvpUnwTLKpZUTmN%2BP%2FzEH7oQktN1%2BRn&X-Amz-Signature=e43fd269795e5ff050d754e3cca098bc8d22b9c99f78a3dbd846e35082ba4533&X-Amz-SignedHeaders=host&x-id=GetObject)

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
