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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADRIYU4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2aiWSN5AveeIIhNvIcE29XX1ud2eC1%2F5YWAFjNguLrAiEAsy9sAVkJR8OOUT2pi5BITnOVTsFTHzi92qgs0PfQiswqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3KwXCAt954b0lU2SrcA4QJTg9JfNLB6sg1Mw0QBdfoFVg6UljpqLPhFS%2BcgMqeQkK2QVLc38UccJKJDc8LonBCjLBXXg9CCoy36xxGVrGxzzpc6U3dDSvz61B%2FinUGOCPUmzMrivMIoYjiwXELt0GsXm8YWGEfdNgp0L9Y%2BGIXfN7zOEWycJ1x%2F1s5%2FXPa8dxdc4QH7FHvLYsiZ9gcy01PmjZuAdiECmUuSdftGf5BRwfg06CsMSlT9nUpBeD9lymzGjRqqIHTTF2f4Mf44PCDVp8T8KDv1vARpBZyDWU%2BS6ZhvfXz%2Bv7hqItLGTxBH4XEFmhofeSP67mWz3WnyTRm5YK%2BT1CQW6JRuPpJQlp4dN0XQa%2BJKj2K%2FAQZjDqxwb2lgRJ93oNWXxpqUb0qePBQs9goq7T1twn7Gh%2BdC%2Bs9D03QjdGGgarlWDeeyt0wN1052Rst2dyL1AQ8tcS8Lt2ZieCkShQ%2BWJweJTnRjKgFGLDo%2FF8cP32Q2xl8QiUJEh0HixPmdJXW8tndmqT4CkK0fT%2FgajOjP2pwy8Nm39lQ%2BA0a7TnZs%2Ft2QK%2B2k%2FyscPSX8OxNdS3CKPAeUoDqMpU%2B4qvoKXXm5klaEa5%2FZKYcHwU1YHUg7fHKUBEODPHhftSl9d866GytDSZPMNnfn8IGOqUBEc%2B61tITI0lm9T2mtVvY7IjyZRfsGYU21PtuKtM%2BgH7zmmcZR6C0c4lmZOrmWT97Cp%2BLEtbTlqDrPcIKdWpeRLzlNxJNjUNeYgcO%2F9jG2QFqqM6ymq69tSeQQtkncC94I1YZ%2BrmSaAQ4Am2sIyCyXZ9AbzXLjxZjvzfCbWeFDehOBMyGYKAAHEpFgmxXTMBHj5we510cScpKxNMJGntrHZBzdmvl&X-Amz-Signature=47f278bd18b2fb550e6400e33ab9b385b131a9288a5157994a4cf148e3fb3219&X-Amz-SignedHeaders=host&x-id=GetObject)

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
