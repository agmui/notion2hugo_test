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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4JRSHV%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIH1WKnfdIEFUMd7U%2BICfMKHEoZS%2FlDHwHkS2fyLLPlhBAiEAj2vIA1X3WELBNJ7eqx3J7GQRhBhfD7gd7dgH%2BPypCVcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEitjv5c20LpWzFPnSrcA%2FHDk4Ch73M0QLb0smgZWllbuSipt0XMrkyxpCGpLCVABRGkcblsPqYwVQRjmQ%2FU2RlcNsBighmhC%2FrE7JJSMVPfQSruxfxFYv0rtRMrhsAnyhAqmJwLUgp1qP1RKdwEptxgqnGllpN%2Fen1%2Bta9JkfHza1BNbTmURPzqgMIHmN%2BswPgsMNI056yOvqVw7ZC5ZKYr2ikCjsvGD2Lj2fbQmpfXGaJ%2FJlW30DSi5J6jdHvkR2nYtzcKSihAgqpDnQPVBvhwaL815wCJ9EhzrzSJRRwGFuzkCftxIdVfRm%2FZchNszMFK8Ry%2BVtL7eaLwVZ85YAcMudq8MAGtrjxjU65CRABjrxzSkdJPrzqXNYflb48ECwWReab9UXTI%2BYauY6nn6Ow0p2hURH0DVimy81QMidLtAsioP%2F6ENRlB713G1tz%2BoR67ZHmPempULug3LNNnE631QJ9eEvM%2BqE7PGdKqnIlUuo2gbcb22mGL3jGbxmhXT5jJkkfqtAUOMCXj1b71BZMuRIzo6YYDz90%2B1zeZ5FHBCq%2BVIkiOL%2FvehXXgf2C3yFGgjlyYzWASbTE4Ulp7EIiVzM3DJDukZ%2BJA6CV2eXeAenHF%2BMmuoA0QN6x3dSdldj8qjjU1inwF0ZdJMNfoosAGOqUBH%2F2sY6RQlo8ANodCgJJbRSn7lUdn7%2Boftmj%2BxgDTEd9Z7qooC%2Bv0wzPxVGTW8iDyuZcJGQ1GzYbjuunTKZAmDrYlkVPjqxgTWaN2SxI7As9aJMZIiWIfhapfuhu8mLL65zNNZxldeuKeTRt9uZp4sT9QBThCHzQp04zEgsu4nyjD7pvO0wXfrbrWIbaJt3mJKDDm9V8%2B2gWTwKR2cjBXWV5vNRTE&X-Amz-Signature=d5af237fd71d3a6a8513e3509a31ef260dfa5c73b3eac7e0dedabc0191750c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
