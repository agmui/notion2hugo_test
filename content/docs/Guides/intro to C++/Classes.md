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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RMORLQA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD%2B2sXKfQyenNoGXMLrqneI4IACCfo2SeL5vssTolEPKwIhAI6IQH6T5%2FhvnLamr5Rx3AswzBwQbwMaopitHbwLb6HCKv8DCGIQABoMNjM3NDIzMTgzODA1Igz1nh9l6tpHY17SDGMq3APqataZJp%2BPBcs1lYlrVEKa7T5xlLsswZ4eQJ0AKkpfR7T%2B4QycnaA9ct1rh%2FH9t9FJt74cwK044A3CTF2mjPyX4r64Azhwsx4uCa7rQWkRTpeEf20LF784zQBhChCxXpRCu%2B%2FxdqefvS3W9TBNlDXO2NQYhD97mHlWUn2Wnjy3r9WVFKQA8dvLQ2rPeMUIwFriOz6SgaOgQ7G2XfTL83qA3OCw3uynmd3BLY2YP8mz1OQQjN%2FiFVX4opGkQGTSAkaiOgGqoDDY3AXgDFAx34C7UJsEuDg88YwW8y0ezxuquB9DLVl0eVmUR%2F6sMWQA8Z9G3NFgJp7bRqOziFzpqMD3bEDDq%2FkaUCs2Sg%2BY4pTFvmI59Y%2BO22uZ6mV2ZHUWKdCweH1UTb0TsWdnuV8kNxPiy%2B1N53RH%2FND9vqnMv3EiQ8%2FdwAHpyvX3wFOuafYgbVu9Yor6qv6HkXrR%2B3H3YoQUippB9depNhiLP26nJphtFPVbxF%2BtjK2HsWh6UsR7An6dggqujuHdrbkfJamQ%2BzuNg4LXmBzM3XyyLoqZ12SO5LwsF8QteArFKAnKacbbOA8x3vvvAW3Ck2YG%2Br8LLjQl3KSn0mCwm0Mm4fO%2FTzaLb9pvNeNH9M9OP4ln7TCztN%2FDBjqkAQBIqARyXJcXYhQFGNLr1zqDZcHHb7nGijBt%2BTt8dLG5HPg2R7PmO%2F7ki%2FWzsA6fvh91LaNxfLpJlI2Ky945N1GGV2ndrHaufkjTqbAGj4grSmeJL4mRdvef9%2Bc4a4q0h7VLixfzbkaIwemrWQvuqggOpUDeKDKXq1qLycJ00h2MfJUeXxlnwPAYoGPx%2FB3%2FHaLY1Psc2yaMCJB5SGQzO9tNC5Mc&X-Amz-Signature=1eff13c2027cd8834b7f121d2f5f35c6d081c246d5a25f1a927598d4496136c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
