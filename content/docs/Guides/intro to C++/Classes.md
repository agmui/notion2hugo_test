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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7B2H6S%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCVpIiYW3U3PPwZ4TjnBKEOwhzfQi23tl9Wk8B%2BDvJjSAIgX4v8vUGVxdkpmw4bqiCRInqw0SEPnuKWTsNzZAJtp8sqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4TANaP3U2bybrbMCrcA2sSvgU%2Fud5sL6k5uBIqC7d1rPslj5yvMkCwP1OVs3TYu9by7sTnOFRzxtmV3E4q8JKEoYUJQrtoYID4irbfPDn0H1TLdR5pG%2BxFim%2B9YgrpTRLeij1yHSTBcGBlHGSCQoPPJ1zu5rADn%2F84zIujcSPAbhIoBM0nU1Tg2GPKNRdJ26kYWJHpQlmq4KaK2IGEFbP1HeIHidtFgf23SKuh6zcWntr8LennrRChkuCNvEFz8mhEzk0qM9THtbN0kQQgaL78YHlKDZv%2Bt5tTAm6pz2LFSKtQe6VXe5109MMS4o1uBubXC6kD0AWnC688LhU75zmW%2BngSdDBMDsB9k%2FqEHyCqSxM18CzxghMOdX%2BwGT%2BAYSf3PaBnlkKFBTg1BNmkysdS08qLLF0BKVWFfzUsRZxwjOHiv453CEVsCDG1uAnFmtUOVn2rNbCwAkNosxtzWtbK4K1R3z2kvP08Y8U94Wf%2BhuC6WQqbpHQhBvGpuxnhvTezOdVvAOXfm7dyXkDBkcNMdFIcNUPfaJeYl7XuofWDYmd862I3NDODw33XUrKGFfHX9THfBig8nfvOycJ3WBy8OHCXPYlXTto8RjruJFvLPWyCtExA3sWWvvl7%2BTdpxyIm%2BPwd7lWW8OjdMP%2B75b8GOqUBAJ63joIYLxis7HhYFYb0EKUjgmCLCaJBJVvM%2F1tNJgsMA%2BMrSFdZeF9%2BfDtztnVnxr%2Fua6o8qh9k%2BqOzKMHEGUN%2F9AeSYMuaLPpuH4Cw0bjK7N3EfS0JEMVvD8dojHG%2FeOpBsuvbA9JIDoeyzQsXEoRmekYffI2GpbskAqTNAFjiVB1E7uLenaGSBkIhuaJwMUqP0qMJKhq%2FbnK5LWSPkMC%2Ba80t&X-Amz-Signature=283778cd81db8866ead4a4b25aa7196b1beea87183fe46464abd70f77cc9c705&X-Amz-SignedHeaders=host&x-id=GetObject)

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
