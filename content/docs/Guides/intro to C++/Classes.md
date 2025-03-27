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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626S4FDE6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOkRgbB82QFh9iSNacBXpqz4nJ%2BshGbE%2BeCMgMV4tmJAiEA04vAonfavMUodjGZMz9r8fpupEzyzAkTj39okA85R1Yq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKYX4ktCzQmR8j%2BhRCrcAxjQ3r4ueSSmDoDxSkSTkDipQFuhwOx9YdnUc5FUj9FX2K6RfA3Rjf9P5BpSEJXBNyMhS1ULxI9M%2B57rSNt0kacdHlxQ25x8rRrhOulJZfPETwcXvEEyeGrV8r%2FEOiQGI0xbKpyfXDnA6KfBLOScKK5N6V98NFVJkY9hiJezIUIqqdGAwUowUK72jmb6AYAglNfXwgnccxPwI2Af%2FP6lFGUYXV9SaKjvPNpiDMfWffj8sx%2BOfkoOQbjQDL5fXe29N%2BMvVbsQgyFOUJ4XJgGAnJY%2B7is5Asbrhi%2BdhgnmNO9gi9NNGmUJX5qmEMYGQVYu%2F4dsHKx1z%2FWXtoFEcNJfV0R3aaUKvXFe1uTZha3q49a%2FblOSbdPuGUveeZzjjpXWb0f8hdMcUZbipNmPgJl3DDkzTwITG2lONtpRd4XfEsaQouA66ZszoCgMI9LUqMsNGhPlgtRTnxjg1nvuVCxaexYsYY%2BVlrvOgevxPVIzSSu4mO9mlo8n%2FEZA%2BD9FzwMXn0UNTpVJOjaTD4S8ape3iyU2eqFT8rX2t1tBJCeRK7wxiyCVHrCxUmRsiZ%2FBEsC%2BqZ%2BxjzLz4CUELwwHC29EklJwVDOJaj1ffg6ifXVEG9gZ9rkapulGnr5j2cljMKLtkr8GOqUBh6yva%2FdXJZ1%2BBYzSXvrZ5kGAdHGFuPd6hyJ354V6utxFVISQJjWMRJDnV1wwwbNWj2Qzz%2FKyr%2B5wFzqPOjt8ChXzEE64at9phXEPq7Emu0OQwmw7Gvft62iswvoqzS9u8iDeePY7I1ijABCYcLvIO2jI1eWlNCb%2Fgfcvql4Cl8q6STLpDef04EG52SWOM6vlghXb4U1Aph7d5AVCR4tkqA%2BpVS%2BM&X-Amz-Signature=23e2b543b6164b4c3e6e6254f128b0bb0e574715012bc3975647a30ab052dc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
