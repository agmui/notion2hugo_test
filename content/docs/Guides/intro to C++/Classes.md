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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMY2ZGHE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq6XlOLcs8EzynWRmXAH3O8kU5sbEFUWu2FpmypGosAQIhANLipuwtGdQe7XfRhgjwwnDT0%2B8O80FLvg6b5Sw68xpVKv8DCBkQABoMNjM3NDIzMTgzODA1Igz7gY5Sb%2FNY6xY0EEQq3AMPWjY4%2FzUMQmwsLi4V939i2nxeILGX3bsn%2FfHBgVDo0%2BGFcsm84yWnWZgFKQEBRjBID01z92xhFkRHFLtgNhhMAoSPYSOXsFewsX3BiuSafpD%2FPJurrk2u3KODJ%2FDwabUrfQdMEHPi7Ungno775Df6ISNpIKUR2lFCOiaa%2FLF4%2FnDshbXNnlFfhv%2FNxmrr1YhbCrVvA0Z%2BpRewO6XC5lIJ%2F39BjN7%2FstVVOosPZnJPzlckcut8VAZVHDrzpQ4WflJGa%2B5CjW7KWaNq7K6up8VByJFjkBpKXRLrCxq0ZUO2kjfXlFnj7f%2BSnYQbYZnbra6uXAJ8OA9op3vSgTwblOMcA22FD9scu%2Fqx%2B4m7ungTwgsAmhXUoawoSsF3yMMwypm2mdiekzmGQl5FJC0sAnSSKUX57D%2F7grVkM1P4l3tdSiREYfFfkcP%2B1bonlCMnW0fGuHBxnsxTNyhm%2BIHJolnDXW9ILEs3953OmCvCIsSJ%2F0h2YOFSLH9gD85HaIA1aypBqAnuaCS7wPmd0HKiV70MMcNacmgZCKukMqhteKwNvZOJ5xK8B2rZepoNwHbinE8YkiiOtohoWYp6A9hdHTJFU2jSXdMV4X4OEI%2BqWXRVySXxTkPCCPMB5BhpwDDXo4u%2FBjqkAQNjy%2BI8TJHPI1d703d9Y4qguJwMG0T%2FpZTAR5ZD6jaLcxMjqaWor6NcNtSNi0N4MjK4EnKyQaflkb6bs1hSFEPDfa233JMIrW%2B2jADhOfapz6u3F2AE4CzKmAgFphlwTnOHJfdBdVaXkrPgT5xN%2BLBavIoaJWIB8Va8Em9RoRsnJjuQBso48LfTnkWs5jhIxlP2RgYRGWKAxLn9QORfxfRhno0Q&X-Amz-Signature=9cf083d84acb86a07aecd1d7a04a03c7471e4f81281377ea15e00266b3bacec7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
