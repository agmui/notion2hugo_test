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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU3ZJM5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1vHfkXWF0URF09ogmb%2Fj%2BcIGcPk2fEnsPXn19S7nlwIgAnHfKfPshjTHZsdYd1%2BDWmHcF7GxMK%2BP2ekziX9i2nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHY0%2B3F9ELGjcbpiJCrcA1BGsp8sVxIC7Zwvt6QtYPbThnS3sD0FdiDL%2FvNoLpVEBPwwqas2xS5aZxs4ROLf2aFXeuJ%2FPlFYSS8aOun1%2BpgKa9xMgZnjEHpeOKMTAzhJHbYVsAm74XDlbYipQXRoSccNEkOQLptu5R1lh50PaUuFji1wN4qTaMRG5uC1QKUDs2dRBrQ9cVO2JOZf7hUSediGYq%2BaqmoFOrWroggGBBK6qZcMgR6aRQJ2j4OTZpjLc%2BAhf5BdzFeQg6Yk9uBj22GxnIYVk727c%2BPWapRLphQdZXQZaTaJ2FkYsNW4wxUMUnBDV6quL4hQsYAWs%2FzQPjTXi9BqhneWLvyHPStUMb6N8rnUu%2FOiDhZT1vLVpNYeHvi7gG8%2BJHVWridrk5BMimYHiaKFQwSs94hc9K5M%2B0CZxVijSEWq%2FSwHfXWGXvHtQlawqaf2m%2FfBNQseIT68o2aEa%2BmaVTNWsOWK%2Fg8JRdgNUfgGLZMiOGziFyq9dHPMHF1V%2FY8xBlgAwfdWCGXpsuR5Epo3oA4RU8OMUrXzcdp6O23eUNKN%2BAYYn66XMX%2F8696DIwIGC3IoLbtkkA%2Bytqzt0lLA2Ru2DXJJkie2vk35U7mr0sn%2BXdAkUiAtWWM7WXJ6d8%2FrVYhI2abNMLybyr8GOqUBY6gZiNXthuTx6CbCGNt89kcPdBYvriHcT4L265G2cVMeTtNeRme6ZcrB4tAJAVGzZEkinkLqvBexgnbVXyV9OMn88SGvcQHxkLzh7nSXrgIePtuJSikIMd8xGTBqLQNpLj0BH5KAT8PTkLIinwF4MJBUGqVifREIZlGfC0gCIwLduPTxu0pS5GjopUfUfgs4MxoCfEPxLiqoy0MukBe4Y2KNhIq%2F&X-Amz-Signature=5db4aa2e4e3c9805fd5c2ea3034cfe2bd860b335864c52320c15654870e23b26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
