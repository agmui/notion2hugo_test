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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKCW6H7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAUTSKnrOBrapMseZHBG942rlQd8d5z9jqqEokzT5Y8kAiEAwOWrw3rzblW0L9J8xICjdB3RPcOT2y%2FklfWOc6oGXXIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLQcvWWp%2Fp%2FWB9KTaSrcAzYxZAmph5HZ08BkMrbenEYbaKqP5QB6mHxYOjgyAFJCWf%2FiGfM5CVJrijuuW2Cn2gfR6l0HxJcv0TrQXXfyQ79E1%2Bw7IXUJmcEABr%2Fxg7OwodUNMm3%2BOIDiAfrZDE6zMbW3xwNrIQs%2BdVg2Tu2JYBWqrgHzSaqEHZLZYmDXyjzsiR2DFi1yvUBztUKWc6MKo32LFkQ6QUEyx8EtRVZ8qu8j3VXnlO7OAtfGDxVcIv4EsGM9S3%2FU9brCSAfomyjACDNnK7S%2FYC4yW9WaQy51Lc%2FKOwAkuAw4PDcJ8DSkR1jf9hqx6tNeesq0MDciySqjSBmQdbKujsQPURWFMcNhZErMf5x7fu2M%2FBD9bOkqysRkBUJp5eSOP8PnzGaPMohhzU3FiKaNka2oDBSU1MIGo0DxGWtFSDTSnM%2FmSLSZabL5mlwMoDevpVkau96pLV0ebcFymtmFLvW%2BZckf0%2Ft5nwTJ0t5Rn1fsNUG1DjBi0ndJZ0CXJYr7C3qhM8bSMNQ3EHXgSCC6Z7KasPvwTDhkfHZqK9vG7uMgMnUCGmwGo8csbP8K7CQUQT940yVn08HW%2B3PBGlIfzwYKs9Og%2BH%2BFGbyPEYpBtDgFGLWGWfDldu74t9dYeTitfojVMQGPMNLMwL0GOqUBpn2eJx2OcfLc2ak0tXcwnQbC69YUaSPhy0%2FCifh%2BeXvyM8OSyCfbJUokda2PGbW9ULKJD8WnR9Zm5VUeKj1RA8rbyK%2FM9wvO%2F%2FEpkAaiCrHFNFnxE%2FXGdg1T3HPHoWWzD8IYPecW%2FzRWSc0D0NzhuGQDW2R3pem4EQYhGB%2FL25Fus4snPNixo%2FETQ5RWBkYVsTNHy2vM6nOrDIKMhUICvBdtuBX8&X-Amz-Signature=e973beb8e66a5fb917ebac2c98c5fabeee029d2e8706b27fb62bde75d3fa9d23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
