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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SW5RG2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICaamIYI3HliFbfjSKDOsqB3tF%2Bc5Phli54UhcPp1d3dAiEAnFhSw%2BFN4FX%2FkOX5gZmn0qIvLX8PD07Lb6NYuyQJYywq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGih3Ha05xdqtdGDmyrcA6TMvJmai3bjlaVjpKJXXPGTtt147dTDAE24ORm19QPtDSSRyNYwF4eO%2FU%2FG0uj4vFdNNPq%2B5R3AlkyMkpwkFTo5kkoNdIRaI1d8HKBlfUTRiNT3szwQVuV5edG0lzafQuYFkxrbFGss4G7amBKn%2F3%2FBSsbqZbqpq%2Fpa%2BfcTjhoG0%2FLjqOsoxyrdPVpHlOyKpNYHMt2y8fOM0qNB6vVeVBCAk9TEup6jYTqxh%2FDe%2BY4K1OqaXDXdXPEakcNqsN2Gnezu5GQFumx3nt5y63ccPvOimE44IHhUJxDQM5xAd7c4MaQLXPn5Y6PfyZSieDzXLBbSoDFhFYlYPy1Q%2FCAGaCD1rdG2yflloxRT5o6kFR2ThuDsgSDxnEshN9IP6dmKTo6ahHLRGIR94HILXTXi1RdXofJc2PF1SOjwB8Sl16YzsO%2FaG%2Bv3OU8XZ8vkEZMc2%2F%2FUzoUK32F8dWZjGujrR2r8jqUF24iIqKqZeoVkiNayfBH%2B6pbXjuKpy7S29xT2%2FWkgkRZSqnFjN0l0ZaqtGmf8tV4mG7%2FO2%2F2wmsi95KBXQo6jnEFPzHvDyVG7gg4Em7IHWGGY%2ByDw%2BgWchLFWQX36AnAs97zqpWC56DjSaQFgqbefgN324eqpwuKWMObxjL0GOqUBs4WRUHBACam6I16Z%2FyDIQQQ16TpOyTlkc5q0nmDMDFWt6MaP9iGdvc2N007UnTfFQMrlmbF7YqQ7kyRRNTVo6%2F4HhUC5HeJIxO6TxCab5JzWRvAWwO23A%2BwIBNpgFW0vI8cu%2BRER3J7M1wPVqQ7MiYhQjKxHEUm77nilcqW9jvZSWIstE8Q3QOpt5OuasyW7%2Fc02tLOPtT40v%2FYdYW6ZTRjqBnCE&X-Amz-Signature=31b99d5f37aca91d4eb0880e55f2f4fbf66c69cb9bb429825459db7d1a0e3672&X-Amz-SignedHeaders=host&x-id=GetObject)

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
