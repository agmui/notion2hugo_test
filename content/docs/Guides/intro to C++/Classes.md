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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4UY2TZ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDMkPPayjDFiJjAI5ij95l6NeYzBp7sf2rscyzejgtAiAsjCUJUu%2BDy5Si9giK%2BDBDWUFQAENJE5sINhF7qDHxMiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP1fbbIDzjTOA3BqxKtwDrZtS1rmzsT5uM7xltbZctnGqJI6eiUeXd2aj0mzlT%2Bgo7EcfR2vKx90HvRMCqDtAic1Jve6781xyFWyny5iR%2F6fYfDjMQ6jjFF46KBe2G4dYjHuzO2fpvGH6oQQXr1zhcep1FKOJo0IfSOpiHX3yAYywCg%2FzY5%2ByqgH6BevTUlSmSEhFkFZiDk%2B%2FA5eVXhJoPJVxJSTFzbuyvbEupmWJ%2FPelYWwOJw3tEmeReAWziU3w4mmHe8BxMEurcBpXX0VdIoEwFD0K972rnYcEyInSdrLw5gs1ycgMAR9J57RiHSIQOPEejsNGhiWZcx7hcJLw2VYeZA8SmU5j5T5J4Uel03%2BE5pD8e%2B0zxU5YG85%2FEGCYUnTS323HBAaHOSX3A80lO%2BESwbNzXlh5Gxi7uOchZwOdN5YnsK6AHpGW00OlVJulcLGCMqfAzVdz%2FeGFuvVjuqINZnriRJoWN6%2F8s9oj5DwFAN41G%2FmAUWeLJGMd0GmM0baCmZVqIq3gyEGXtVJuhS1zztMREX6NGXW%2FK2U12MV2WsGqT3hOec4eUi4e%2Fb3DlDwHveLuTlGY7%2FakXXnPpNyJeZ3i1z6%2FyHBMUDhQg3%2BMX2Mxgv7%2Bgi%2F8QhqYLq9%2FOaJwxrJRSsKqZTcwnb3TwgY6pgGCpHglqTYsWwWKwHmGPfMoEt1pZMnd6JqndLuOkeFih1JQHkEltAr2Rmeqx6g4E0NaF1CvfHXJUJ5lrKotmmZ2AMjT2nn%2FR8sbln%2BQhXrKA4JBb5H2rcIz5UbUMZodKRX2BGXcCvAtcpAXMyPwBiGtqjbABnCkhXkfGg30f%2FJH6PPIblg92aBMWJ3JRXUC7idv%2Fq6K9%2F7ng9UV89tcy06FbsOZ%2FVKF&X-Amz-Signature=db43050b5340c8bd0e9bf8b823184924d479852bb8a05a3b9aacf87635984c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
