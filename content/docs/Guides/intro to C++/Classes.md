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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2J2QLBD%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIB5jFQF32uQz9W%2FbUfT2r4SWh1mcPK7rueytfzbfl7mnAiBVuSR4dFS8FcFe3Gs5mF0bTtJE3NsgGR%2B4I8wttmVC%2BCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BilbWWHdrZl6iNSVKtwDEY1%2B6KQDIsIEEHZrd4Uzprh8talwteVSsibyrsWIaNZPju1R%2F6M0UkBgeDZJd8Rp36kKnsCHP%2FW4qMgCnVf1InwRYFLEYIS8CBbEJ7y0UkJJNSWEhscIlaTZAiyst31I0FFvz7dE%2Fs3x%2BdErKi2A2L6HwGqAp3ejTPktqbFPClWp6DXjhWyD7RqIBijo0KUepMfxc8LUvDVJMUcv5xt4Ua26yzQ2%2BEdZLPjB61fMwIU8YAx7L57Gr7uysg7o1ZTHNNU7xnPRr%2F673YlpWxShSwzbMqCaaaRvYcTlY8r5%2B5LHOBxZz%2F7%2B7O8EEnRTp2mogSmA0%2BJhiFZuJyWbnnLgLYDD48%2FPw%2BFw1IPmkOPvu1qQlDFkjbrl5CMcDjiL%2FQs%2BbFXpX40hAZkVCpMSejlLetvEtRcLTsB63DT3dCJDdGHE2DkJWtUoGZ9kKR4D5V0i0SfDRUsbuGRJy62r60AU2gIy4vWUe9Bl1bSPGufg4O8XK3ETMbCCk8%2F81aqpYoKuolqTeMxN2FclhHHbs1hfvZ1BqWpedbaJ5G0PcAMWzd6YzHkB3xZAEBbRX%2BBq7FU0vvshrilS8dU9oUlr5IwD28M5XsZcH%2F%2Bd2LFNPR6zyrc4sMz5e5MKfpIZfVkwg7T6zwY6pgFTqKMpOXXGC3wgO113TBpOmF0T0Vaz%2BUHjtAj1fdwKBYLVoDgGJwE8QjSanr4ygDbVOrDzcG0WgzW8MZCCYOrqIbgKzK%2BViq%2BqPHgBjyjuA6ZdGeT6dDaD%2FoGUSZ%2BPw9kRaiG8n73JsTm%2BxMqtsr1qu5pwnNSShEez7OdNOhbPLlC8PUltoujoSfTa3nXE6ZJCqUH1%2BBZq%2FRS8K0lQZ3dOxgCMPHpt&X-Amz-Signature=fdab988e1580d77be8da0087af418d1d50b57c835245bc2d4bba6fca65a4726f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
