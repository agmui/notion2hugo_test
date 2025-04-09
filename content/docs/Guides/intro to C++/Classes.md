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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Q7GAH5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFu%2FOeGP3YN8cfJuV0M05iIVZCzcNR24DC1gcitmK1NiAiBzMmuepDDe7VNZw%2FHjoUU7xH8%2B51f8U7i%2Be6bBAMONTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFkpA9HXkBASWzLu%2BKtwDlY%2BgfIDYSc6GZy06ONyWdXtdJs%2F2qIrzVg4Y7iO3u6MFi9kNQE5422EtHspyCmKbBCQGaCQOsvVtWKYn%2FWFkvOjlxv6XGjBJ%2BESmj%2BXSl7L4E8huBJbHX0VMV4qH79svhg4arKyjQBuwjIgJqbYJpL1mSBtRjztLkVZvR2g2XjXEOoYZMTdOUSL0ujzRV4PzmHdT9jDjjITbdBF0s2IFvbTnWJ5gXfGuhmHxOTWTHDfuXKl93tbiVgUr%2Fshc4mITKSKbn6rKiELkBPf%2BWfldcydaW%2FYXztBNULOn4CM%2B7%2BImy3QIbs%2FGcJ07AIG4I9LNrdjGwYYRDe69HmYaW0ZG1vA3lyhvXM8dz44p6JvlPb6jl%2F6JrWFOQRHj86AhoMJuJqGfPHeZnwwE2qc1IwUNSHC3b1M%2F1EK0X3m3YmxPDtLVA6UnXAvR1WaQgsdiwHSuNC7jLB2r%2FVdMsWfCvH1j4twbce70rqRFBHasNV0boJGmn0ggPyp6jZJuJ1aDyrG31vEOEpNeBkUBxTqoL9%2FodX%2FwCUPNagqQfdFX6ePZQucV9%2FYRjsCCs3TSueG3ESJUVbcxF6OC%2FzAADs9e6Oy4E2yMlegn4bfVGM91BL2PW6ba5D7%2FgGrQ77UtUp0w9ZjZvwY6pgHT7SsX%2FRSLN8e7VWGeRIMgiFUXrfcxRooPpvF6geGCWGmoUv7satZjEOZQaPllQY3%2BnwzaQWxhuyol6ATPpBJgYqNoLpmYMJzlwtXOX1HTRbgm%2B5k%2F3XBhFLfCB6dNAID0C%2B%2BMvrCF8Lossw1hPx0alrV%2B%2Bzj3LvzybSZQkZ%2FjtC8M%2Fd73mZ9KpmZ522mCA2sP3u3XuIzxrz14w1kjf2FQlfkfr%2BJI&X-Amz-Signature=7ea275be297c9761beafe34bb3702ea81388bf7bf26a05ea9322304339816807&X-Amz-SignedHeaders=host&x-id=GetObject)

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
