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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUZLYMUE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAJN5o7A12%2By58s5r%2BsisWOvkrDKcUS92MrOeI5eGLSAiADVzheMgTb0NmV%2BFCNw6RPmKwH1572I6CEI7d%2FlHKQBiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3NOTK9FDPcVsDRV7KtwDV%2F8BOnPLfk3EVHvXIRBE5I248t7Wa5GXC%2BkeAZWvkY6273CNTqbS%2F5h24FjqsBezzwcuDcW%2BbpGEasaQoDvDAsB9skLnO6%2BAiKbTinCJJ%2FvC0wLEoww7L3P2yrp8qPoSdQZYad6gCi32aP2%2Btp6LC2d7lGO9yKaYZ9NWO%2BwZSllh77LldCYFPqqmFEQeOXrSscPd4dUufmUvdoTHCe7CBaT%2BPZ8pJa4LWACYwPH9%2FOaJ2Y2Y9moOjck6dhbj8B1rWysFx5F1NNAmvjrwVvILi0w25p2K7zX1ZqwiRuLx1V1o75nnlik01%2BtY9fgtEuxGLotKu1wRiUWuqdyfinUHYfjR82F0MuuVjS0l7d7Hg9%2BKUUcXRl2AaBoApyczILn6djoo5mM0O9nQUIREU3QfMOnw513b%2BKz9CN5zSaYzhdU7s%2BIPhCmHdWJVxwi0XB8JL6nMjZ6kEmQJnofZz7MTcZLgMvYL1CMzKSlzPb2DL39bZSnCo6sLePVUb6J%2BT%2Bx4FefeR5QV2dlMuGDarlYkr6rm1wNBH3KLOsAxLh02bnPyPNGoVMctp1tW2W%2FUayyciTiqL%2FlM69vrTWaRXPInIlxsjad3TC01jhB5N7SMF8jgd%2FMJikyOv9O%2BZj0wxKLSwgY6pgHqSSZEQQ4xBiYF6m4y0ZPx1DS5i1032Ajux0mnY7F5uwBVo%2F6NMZUiCp5hS%2BmUUi%2FC2GICVcQhN89QPNAw7rrasI%2F0PM4JrdFQ4Bks5Jj4rKf0DRJ0aLoHGD0SiWmgWvU9uQ6vS2fPWXPXTbX56fNe2nHPChK49UPkIWt2if43HElo%2FFXSsKSQPbBAtC6NlwIUSnmnt87%2FYUuijdWTwWPw6ruyGxwe&X-Amz-Signature=724541c0b2122f700120f8b2cf4ffe2c25f179ef041231a6f2341b2c9c38daaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
