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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKBWTAX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BHgswzP9EbpHK4%2FMtI%2FMaCFIgPt8XjKok5ehfiIhGwAiEA0aCWul7SftarNu2%2FOhjC8FvwtbY2fEmWI%2F15%2Bo1Ne6IqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbQz8s6wRPYih8nuircA4XLM063lj1NIo6u2OUGr1QXkbMuqNOWXD1HU%2BiOq18ZtVcfvl9L%2FJvYSTVBYzSqBF7HdcUZQIIyHIz6%2BtO%2Bb9UcT%2F9tt%2FKo7PdHOiA3rdbkEf5kgyPBdzjbmqQrwQDvLOMZK6K2f6xpwUalQilXJLjctkZ5pPiafJCGCCcBecJ8GhhG7Zq4UhLuurkFRFk88bPYCJX69Wif2tnQNYctDyEBQWLUBdsH4ID94uhUfV6mezd2MGfOxwn%2Fbx%2BJPCJF5XzGsZUqblrykO5blUZ%2BpOKwly9A%2F4kA8J9mWUMHEegaqeWKvN7KTHaVMxH9EJGAK5%2FU4Tz6wS2Q5FOtphejCxMibyw%2BhFWafwzaxBsVST2mcBho2BQiy88kAZDUzPz8kM3uS9%2FL9hbZwFjjUgAmkWI9h0wneP2eRKBLxHq7sm2Hg5jMIovKistueUUDnLE0JZu2F1b%2BqWW2FuuhZduDBI3aV5UZ6MHgRnG3Nfhg%2BR6gPecQnuOeFriCa4jGp8%2FYiHtLaBkYk8K0e3%2FT%2BLQUfq7B3nXpZoESgtyUkt%2BMgogfdj%2FDIVEGQXX7ZoOx4v%2FL7lUj6JOJS01MkocluX3bezSt7bjoc4owTEzZUHP3M%2Ba0Ts50TIWdUGMjlHqlMNLS88MGOqUBcEZDmEzG9kVIao1MK%2FXqlZustHEEm3rWik2xSQSFAamEFwlmH5pqSfEHu8r8Qn%2FmZSHfI%2Fm%2BePtLL4DQM3gKlQZUDEX9K6Ztno8fLxaIO4bnBjhSxDudaMG1sZ7YbRRWGZVRCvwT%2FTdZ1oKWBI6evVQAkW79Ib9wfb3Q6gJdYECODggEKDrj0%2Fsmh6nyZlm8EsBPPbHd5Jj3hd3bng3NAUSG8kDZ&X-Amz-Signature=f3ab617f84b0af1c8f380da3dda1e28f3b9170fa275380e7dddff55d1314e2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
