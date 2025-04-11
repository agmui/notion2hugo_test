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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZEGK2A%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQD%2FimMeQkLuYoth5YgEElh64kbZz0FJLFpx79xJJxpC4AIgQJjbjkp7eQ7DgKmQYOan%2FW%2Bc7lGCFI8IUtDRY1jEWk4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA93Hi7fRCCpOU78SrcAxw9RgYhlj2I5MHTAbwSibc2GJWPU5BDoqhPcg6ixH1aAMcagbwjWwLWRYTP4orvyr%2BYohR5j62%2BgwZjJirsyYonFC6uQErAtDeXSGJerSvp9OpPNYDsByC2jJ3fXQ%2Bm6PjARzMvcMJXMLuqfBHTZ5SG9GAd1AFTUN%2FHmvNy27iYATVEuj%2Fp5r8XonhIaI3RYvqActQgV5kxOZCBsRW2nbH6n7NhCZJpEw%2B70Cc2vyO2hRIq0eEFgAqgx4B3gI9hy7FZadnKoPK%2BTpstvKZc6RGbz7K00i8%2BqepwienBd58q7J1klKY6bVljVfWn%2BUJk8FxpWfz9qhAEhPIhjSAh3OVRbXGaVtMyKj7fmn1Hs6EWmsTn%2FH0IrKhMhr%2BL0E0u8VqCZcSCzTvpjMBUuoRa3PIhnJ9xFY69jdg3x662wWGDjqR8HbPNSk4A829ckxlGhNmetJLhkLAGDpOCx%2BSM4oacHrLA4oMjty0B32%2BJOL%2Bb68jjI7uco8fTUf6BZDIR0BzWrj2W9SvjtOH5pZEgXzKppSNSy%2FgauHsthu2sew6Y8CY6WXqZATzg5IpQkKW7FWpRpYV%2FuTI6lA0NrtZEslUp7lrWJ1eHJ1ECdOasEJBeVN29W0bCrNlO%2FnVFMKKk5r8GOqUBB5GxorNeAn72PouhggGrJDgBM5bzwBVb5pHa%2FPf%2FgT5f3WRy%2Ff6eKGozRZmagx18kvDL5%2B61rMZxlBaV1RWbTwn1GNmvyc9T4Cma%2F%2B5PHTQxXDtWW%2FFJNrSVvJ%2FDkagBaFkwbm4nlxN5dsjmLfPyGUN4QoEXu29fwRydO4m0OJ15azCSMWG3fzGqmS2LnxIAPtEigQkkrBPVQWp2S60DpMTjHOFu&X-Amz-Signature=cc44a5e669a8a3963813d262dcbd832df2856f69ac8d15cdaa27ed91ecfcffa1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
