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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BQPH6K%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSZkCqf08dyMZF06BGPIsPvw1KDu7YSbUgpN9nRqRm%2FwIhANodFYXlpoXuDeqNIE4GdKtZ9F4RvdOArdGB%2BtJ87XUZKv8DCCcQABoMNjM3NDIzMTgzODA1IgzVaq9P75ujaX1S3wUq3AN7435WpIvilZUhx2%2FGYRjMA9tAnjpopV%2FijnNYh2VWnVbw%2FCLkTXR%2BUNRyesT99wWv0MP7ocweoZAOzaIHITanicel%2BukeSL6R7VUjg6AAKIoWD5dqbhzdk70lPsCF5%2B6Qhi11w%2F1QYpOLcVBqL%2BzhX6Mo57Fry%2F%2B5QEDzvJcbUWFWdQEu13itAkenBtiLjQrbMlC3sn6TAPBD93Pr0vEXnREEsr%2FffapMimvhA0qlVllfaAbO%2BJM15uIuGS0oclTqR9rBHXyiTByXMDPMXP0GMTCipI8ZgjJOhwn7CaF4WCGITE5GYX%2BYElOVCi00ItTaekszO%2F%2Btd%2Bp73LWx9uapub6lSiQVAh3GfkSFjIqrr%2Bf7ZR%2BZJ9QwZg1kzPPMupETlptby1ZPFS3wlEL92R1d7O%2FH3DeDXcrAk8bZFnQZXtjkt5srbgR2%2F8yzI%2Bl%2Be03OZTatl6I%2B6PIgNvxD2Mpk4tWpvIChrXtmH0Fkt48tNO64k%2Ffpo8JPlpp93BDp5FS%2BqZuo%2BR31U8ZiAiKYaef50xqo61JwEg97ENWXs%2BJZKSjEqEvk7rDUX4io0yMtu%2B2%2BiochATQT2xltyqzMZ2Nev5phyi1yk8mRWIyFU%2FSybI3yTEi0bgAL2QAunTCDyqzABjqkAXQAOSI4KW7ZxbsgSIfzOi04RPsqAw7NGbGx7BjUxuzQc5mAo9bh97nVk3w%2BZoEbNZ8ZAN%2FTuIr99FlbRzO4TUH%2FplHcKOL5Uj2V6ARVN8FafwtdP82gfEmjJZzBUvGkDBUbKor8MFGD0BslDrDFDDC6opofk0576ejDx91cww6V9KR9G0rPVJJjqICS%2BDdmA3TsDHGtZeCkTaULr7zQZtvsnYD%2B&X-Amz-Signature=070ae16225310411c4a5499a742891ee629a635b74ac714147eb01401f67bf22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
