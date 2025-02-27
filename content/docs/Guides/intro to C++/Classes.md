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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWGOTCVH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDvDKm%2BHCs%2Bad0AH9SJp9mRM2u1i26sJxK1KWiNRE1nHwIhAMEgldi8%2FBVW5Nbf4bbO4kFW2sF4%2B5Rg47SKuJKwh5O3Kv8DCG0QABoMNjM3NDIzMTgzODA1Igwt8pVUOAzCEjzerosq3APdKrXMgcvlSQo8TJAcyaftKFTqlHa82PlziVpun0s%2BC2T5Api0O%2BrTS4LYFlx3HPQNV07G95r4QcOFz2YZ7YTw%2B7evBPbivnhXmDKi04%2F9e1jtys37v%2BxIfaRlSElA1jxXoVnarIM%2Biq69GlZ%2FAog5UIAsYxJJHKQaGZn1Bc98fq9CSdxj6S2oFcxv9ug8FqsClNN4IPVvWsymOF1aRpU%2BRDHgIJRabtNpRDEPTt%2BPryJlHZ8abT3RFPJbpdWxejFMkty8XUW5Gx1NjjBsZLke0nkA4bvcPBzMYDJUd5Rs3cs%2B0E1Bk9frKI1Efj%2BO4F4v%2BnijE%2BvETdYCtNxk8pzgxsOk6TLX4kvAK1598adw8PiCq8PBjgLzjbEhyoeZKz5iuikht3C76jW5JYx8AhwOVkjTO5F9gc5JeC4rctbRjA2FHbaqHFJfI%2BnK%2FeNiEECcQpH94V8bIHmOOUeDWUxVjlkJ7z%2BwWJNa3UVyhP%2F9qcJ8m4DqbofqdxmabaQpD20%2BlIMN4s9pVanDQSUoK4X7u81y610SFG1k0%2FxaQ47pxMUFmr3JZZ4RRJEVCmi9WTbZNhlbbkwsIRZQqPK7%2B2Xo3fU8VeTQXfqk1kd8AmdoulEWZ1trHrCcEMXsYDC70P%2B9BjqkAU8eabYuHbnKMsXjmr5WksEEXDvrA7feVycMUe8bx%2BIGPLTJ9VZB35w14tJK%2Bq19UawDH3uEVTTN0fKbL9zaNGTIdgAUujJabePw9x9MJf2v%2B2PHPr7LKFF6IUiMEX7SkaPI%2BYKMLlAf7cThdJWQy%2FAqxBjEHEIgJEaPlKAx3YrPRvn9Rajg2MoQyGFYMyHg1MVOTpkN7X%2Fg8xe9QDn%2FrteDnIXz&X-Amz-Signature=f642af93c2b0b88631dcfd9d766754011744861626c1aa3dcb4f801acdd86f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
