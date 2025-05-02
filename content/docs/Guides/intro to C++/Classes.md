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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JS6KZC4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCN7%2FnxKtHmAXWgQd2gWMW%2Fscav4VvLs5T8AJEoXMXTywIgVFCMqNMgaMuqu11fup9M9nFtVXvCTBpLAoSRYu5B%2ByMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrDNmBMYg3mWTFHaCrcA0D5Y4GowjqgVVKyYfOugGHtJ9xJqbVW0JbWWbPNn7oOx90zQiyyb2Jwb826yvX3FxW3%2FB4dBahEuOha4u%2Byt4vW3qGTJq4RYeqVoivUoCg0BluZ%2Fq4yVxfGl9s3vVGspOE2Kz3KpbGxpvENSK2emYb6uI3oVsN7aiXpIrMevx8TDmPeuEV2X2ZKCP2Qg%2B%2FH3YbwSImCO%2B9bng71llOk1y3Kx9iH2viMAW9HGS%2F3gb3VyFCBkOZKPyFbDswJEy3cnQw7gj5wQmrsvjeiobR5pHjppy33VvyKsPFKmYa0Sc4rEDxH3rDp8XBP1qtHa4ux0F5iX4V92BVQtT4liQVFyTi8IjYUIrPqEhV6K8RijYE%2FSw72JQVXjmsCEUzi%2FVb9cWhU09bJ0yNsak67TNtMC72mSfdgE3nc4RuX5fvKuI1MY5zwDUT920oyk0gatJCQy6LNfMLI3totmQMLEwL3MooRB528ObIk3lP62pIv3Um4oCRXwlwcDsShOHQVY3yZahccxtjyAvPQlGlvUafD7KpyryhWndYhEsFM4t4QFphN8JKDkHX%2BjDloEjMrr9h1HPxThoWHndZ2cn8umWnbzTJTdNxk9GbKPyYM%2FkCfpYqWGVu5efJYB7mmdd7oMImO08AGOqUBTWhnicPgAn5%2FK7Zf8NYTIBoZLoIaCAgAE7mHET4CCwj69ih0xXw32iwJuBscW5VymjZsbUS3UtOtFEQa3UvuHgc8eqN0mLWpaNWPBGaL1iXBgHKUC%2FF0lJonn7q90nthiOYB5WMkyuc37Zq%2Frnn%2B7if7fUiRqdh7rv6xzqKkhv%2Bo3lJHMUZwh1dmvtYZKuvI8RZU4FG1g3cclWNnUXvok0nCrPMM&X-Amz-Signature=6d002041ea8eb3906110da7fe32a03fee578feb612c060a7c94bcc9061d0c6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
