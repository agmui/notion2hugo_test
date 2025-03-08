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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4WCCWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAF5hb1ZTFLFZBz39Ri1uSkkiymBp%2BgmOmJLQXGSf7hWAiEAicpEB7ITWGIqvLL7%2BVP6WUvQpPDujkvSDREaYhP1G8cq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHh2w0N7XkALVLgRqircA31nwCwRvqXsVSX6ZwtEsE2VjYP%2F%2BeBo4nYkWvYN3oF81vt9HPUN5nig8FZm5FS7r7qVbVNt2RUsedhNCgo%2BZJD6gEvDocp%2BHrja%2BUjylMfwJjR%2Fo8kDQC2unUH8wduKRRe3vfx%2FfkXe5f2bRDzvswdoQOSe8RiDLM9qGaIcOfH8LS6P10Zakn7noFmyPpwN8L4iBg1e36p079Uc0dPq4g2SJqhG4iq3WmLrERE9ZTIFyC6KeeJQHH4HNMqXV1QemOhOrNgL%2FnUVwz2lITfAD6uy98NzH1l3UlZalYYYHop%2BW9gdsDNq0m%2FIOJR1qQBrvzU2VlGQnfNu16PbY6MQtLzI%2FgEbEEL85qJ%2FB0cnAa%2BK1D1Uq%2Bjy%2F6tCT%2B503Fyd8STdi%2F7Do9ov1uXmFtGTcqmmBvfF6WQXax9rgWuYlqqcSFxM5pPR5J8CucUszYxEhzinLgyB6iRk9wDVJQOu1Q4Pd%2BrqJ4oB%2BJxdZLpH0OJceJsVJSX5VAqePe8JIgocL4ocDTHSozf7TUjrFUugYRf%2Boig4Kz0gB2jOGbqqqMnkJjwZ51ltKAWAb0aZj7LXuJMKf%2Fibuf2wXTmja66zpLhV8iTe8Sqi1PDtCb73JYW5OhNN%2BykCjbdbsZ55MMW9rr4GOqUBl1oUQVgMAjANmX21ceJUH3%2BLoHL7zhn%2BbAFHMhHR8uho0%2BrbM8js%2FQdNKWw8vnv6vJeUfN3NjLKLTvLh8YEwM91vavMtEqofGFLMGAo6gl1JLFhdtygk8Ske3RM3O9tD2Unnn03wXJLoPtya9kQEuZYa8So7%2Bv1xhbxXt2XmIZuE5Tmmn0oCcHsh6dMJ9FaN3GRr1SfcUfkiNvl1dwDZkqGz%2BZ1s&X-Amz-Signature=1e0483bb444116b49c6e0b2efd37fca0fcd8cd2441ccfad987e346123fbc7ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
