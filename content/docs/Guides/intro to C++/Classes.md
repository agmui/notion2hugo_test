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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624UWTK3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD0QB%2F1aZmWNZXKfXNxqCMxo9a29HWrozhvPrqjNBh38QIgTplZ2uhEfBa1o%2BdF4%2FIeieK7xzCNqrcQ9U7uUM5ZoB4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi2pN9LldlC%2F0bcgCrcA3l%2BFcpbASoibxqUEvuxxD%2B3k1pkQdfp1rJZ8PFyt6cVljRIT69dzj4hIwVAE9ea%2BG9Yugd%2FlrjqMrucW%2F%2BoA%2FHKmpu%2BoGWtTKKVwr61nQg22VNYYV5m%2B%2FGsbZj5A7N9nlqEthgRDRp8v2p85RRUm13VngkcUdoSAJN%2BGH4RiPmK%2FKf9fQ1FS5Ko2tNsJ0PMyBWQBu084gQLtkKLXB3kjxcBCWHFEdfk25IDW5wC5ca1M%2FQ9N5DkyL%2BB9M9uUr24s6O62fZZyIULNQPwZAFWLmXwF1EXwSP04%2BVmAae25hhxEW8wgGky5uOSjc2nh%2FsCZoQfLAcKJM9OArHo0x0C5mRUmyth6iMJlLX4NHIHHMslU0AnRkdnCRf9LoKGfh46cqpo04EsNdwkPiHySbwISdNLIVv5Yf%2BBWjUfOa0kbggmBr6qWo4XkBa9xc6v8mVpYEje3%2BNZqvCZQhC6PH5SGIPlGCumych%2FUUf%2FOWDAw%2FCwcPCx%2FI4KDadI5AmZwGL32w1SZ2%2F%2Bgo6DKWt7SOZXA%2BDTz0NdkAWxLZoZSkRaK4kd7D25x88NiIRjVQa4A%2F4SQk%2FWmzcBljF82MXpFab8yS4upbtdT6A%2F8Nr%2BzQurdhYL0qhW7U8gD3h2ug3TMIqegMEGOqUBeE3V0xGOCr%2ByZNnJ94rN%2FbGsvwHt7LiZpAMKqeoiwamB%2FX8sdyydjjut5J5s70CdxoeRCPdZlqp8FFx4dY%2FyjVVuALcPGO4mmFFyyfiwAEkVPvCIcNGnn7QPXWpwnac4kUAeCwEiyl%2Fn0wY%2Bo3sVEPrkGUYsN8V%2F24QqiZP64AcJyokcV1KniO9SW96Y7xFVGHzRqVUbvHexmq%2BMprHL%2FsV3CBur&X-Amz-Signature=81d64d00ef2a4bd514e79b82526451e3db925b07b1bf8de6f0cb07f966e03621&X-Amz-SignedHeaders=host&x-id=GetObject)

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
