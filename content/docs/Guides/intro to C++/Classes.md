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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOLPRVQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQChimitH%2BsrZIkLAK%2Bp7M3%2BKhNmHE0mhM3FEarPfyDOTAIhAJLhwJz7jrfAo%2BfYO3xc6Ad4hdf9dcBU35QX%2FTf0ZJt%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgxOEe9P9YA9tPCq0Ckq3APR6CnykI9XKKzGZyJotyGIIipI5F4aQoylnroie1weovMd4CyFq%2BGBhnj7NR3n8%2FYBkXLcHNs19F3PH19Gr4HdIbkSgoE4j4Pc1lEHSpZWynBHTh6QF2H3lEul65WK1YSWFBmYw9BRqyrwOTEet6d5vLL8qa5DHCXLh6%2FH%2FadHrRNKT50Lj%2B0ri9zE9P2%2BccaOjkzs%2B1%2Fl0q%2F5KxzPq2OcSLIkgSsk36YNDlm8V5E2YK%2BRbYuSUKtbW3EkyuPGUMh8BMx3kZQuFoCHZ4pya1nc6bwCybWh01%2BLK6E8I6ZPNurJDVDwVCQoqVQ15787IzyH1rZVoI7JbEBtGzEeBBXXkxRvboWOyycfVQMRyTLxgJn1WLHV4%2BekeQig%2BdJL1LfeGg96R7zyQ3CuiwOAAPTa%2BNxc5yVDbYWShHvljGBdrT7FicL0izsF48e56g2C8ZdtgUuJYzrsMEXHnIZ0j1kgyRJzxtkUsNPXiJk5kerbwpxIt9GBMY65%2B3ptxUWeq0DkvcEW2Rq4xmvU1N%2FOkhRKP%2FN81jv887RLDVmRZOIAAsxi04Xh3DhTvc9q0nHDOgnQYvByFns1ymWl56ChzWN%2BpML3ga62wi7bp2Zuc1r35SU2Ib%2F9%2F49VY1oPWzCBnJW9BjqkATgS1ba9OVDQXlwFbSw5GcCpLD3LyVXwTm6TZBvQCccCxLzpwTWZFnDhcOoOUQYqRJ7RiHDnECNut3ayO%2BG0d%2B4kMwZMaZS4aUp%2BJcUE%2BY38bsaX3m9D5T8VIY1%2Ff8VKVzkjBVsRYoZGf0U3ZcKBy0WeKULKYo%2FOf6s8hTX%2BH6HB2juTXOeu1FbyiVVby9plxUUg0i3gmJSvc3lYgwwjp%2FPuTCrY&X-Amz-Signature=21d95b5aeb7653dd02ca3dc3f59141acead95873a781278abb9f2bf8b0ccb7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
