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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWS2IY7V%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFk0pgANkQbG%2BHaofphkHOwnambXRd%2Fpko7B8MgulXi8AiBcQjBVQok70BYenP1267hUx75NY5XuU2%2FDaGJHgMqwsCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMkz9FoWxTPJrYn%2BYBKtwDqpBFTk9g%2F%2BZUtHzaodkQnJhzqFTYSCr6yga1IdkoCQO7yw9w7TsXBaTEYQy9IaoRngHBhtwAFBrR0e0o8SCw9EYaNHMGLJjFqgtdLZla9MQmV72cXO6bamgukgCecP96vivmSU%2FPyAVCZZAy7hkTPC6aeCdy2JUwyYZ6MojFPynIRGpMfiY5HvBmmCeRKX45JB7FUaYvAVu4Gb61mK9YhcttCejyMMZfrHQ4yZRWZRb0jOyuGgJN4ow7PoR%2BmJXBrKlpwHXZ8nct9bRPtFxHXhGhzVdITG8VrGQo6hoaP%2BX%2FFoD96YhxMaqDgTfbV6hBhGw1aKl5YfuSv5JbiI%2B0dqoQdvErjZH1LXKfr5y4MVcQfFuhzFlDluB3UOH%2FZF%2BAt4GzKShOKME2Gq65pnlzVOeDISDGuuPBMyXCZSCP4wLfMteToq441L29sHncil%2F1nJyHiyXhZ%2BAEvA1yjlzGWXVviAnUqZ8tjXeQ5ne%2BbBd9fBBeRG8uF7C%2BD%2FA2%2FflLivFlJa0aMcC%2BD4PAzwIWKoPqsWqC7SLB2ma3K%2B1vDHFUjWJrNfpjqDsUoBZiYVvoR%2FafOoq%2BPcVOUH0GP8Jp%2Fb2Y3QUEFmnkLERiUwUnwBc4uWyPhUiCQ%2F3JZpIwvKr4vQY6pgF0hsPbTRJnSIoZqRXXuF3eAWhwJPcQjathlACqLhCy7KuChMy7N6eaPwOV9tquBYlqHxizu55RX0JU43CDY7hJAMuHw7q%2B2I3d2nWIVvUc0xjeI1Or1p6wVALNWSGRjNlJ5L0gZPM3wGa1CiPBS01gcizrY%2F2f48y8gP2jP7yb3uG3uBqqc3Cy%2Bx%2B9wUh4SRgyp212caI84wGH6aSN%2BnoRm0Q8SMrQ&X-Amz-Signature=81255dda4ee83d59b770d40e495596386de83a2eb2ddbbdba6065b8dd52392f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
