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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FXBTWL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd%2BOo7oFSA2FUV7Nrco5WdE%2B7v%2BzHjhQXH0BsSAkLxOAiEAhZmv63ZWaYOjP5VvApJqgBc%2BfwxR7yRir9A%2B%2BpeKDiAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYENSogsDW%2FQCi15CrcA0DXseYfshx1L9tX0wcisFrFTPvWRYkR3i%2FCAhoxB85lEuPbKD5MKxmWYMTUN1%2BarLXAkSijoyKBYhHDCM87WC%2F3AVwL2lXhm5WMWNRuq4BJz39X0fxE9mpchLsFkT89bsAerLSq7mHeNjpyfFY5z1YP3tzm4GZweUcn2t6uxmnRrq5JUDmo%2BAod5HJKdcwMcJNj67JOHQNg3gRLsdjjWfdCQCdxQU6a86eDL%2BZqZj0o%2F%2FjN%2FjOdsfMue2Dtsc07%2FDbL2owbZLKcGHZK73T5l4k6mOpG2jiBq4Vh934nOuZ%2FDhMucboHksThZeyA3oIXeFfb%2F9%2B2n1lOZjUFsT8nC8JM%2BgGxBCWPgxuwD6xSmtf0JLInrSSXpRy8BPtY0wc9NWzhXTGn3olR3ncaSFvac2jtYaTQGTLjQ1u7N%2BGsm%2BAAKK2ag7cu6Dwijrh73RX4MUstUtVrO7i3dOk6OrIts4v3ctN9TFjYtAPTlT19x%2BWpEu21J9MXHKvNwcMf%2B4TAX0P5Z6bjehHNimwFs5nZ1rlu%2F%2BxK366dhqYZwZON5kOdOTesCiUDifNYPHQoCLpUnG1%2FSSVKQlA8o4n6oJjWceIpQYNwmsIAEEdAp7B6C7KkD4eCWLugzd1eoHJbMPaNib8GOqUBLAALKrsb%2BafqQIvnFh8vFARZKkxZzdiSa8rvPt88SK110d6PY8fLcPibDefjdJse7tuFOOxSFvgkVwYqu5pvve9eX5DR2EMN38JTe5Z1nbqu1SjBYqKjOkMPTX9qvCBadZmykvWoEVrvnS7C%2F9zfEGtgdtxTI8qGhz4PuDMQduVI%2FlVu6YsUPoxyvIuryZo93R%2BV%2B4oBYfw7Rr53y3k%2FPngP0i5A&X-Amz-Signature=489b2efd848fd8bfa9095d1775c14eb06ae375c5b1eac972294c57fc56a1db45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
