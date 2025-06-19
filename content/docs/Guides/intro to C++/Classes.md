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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSIAWIU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzhXsiNf3X6tLqy0aitCIcdvulhyCdsa7eg%2B%2FW4%2FnCuAiEAhCuQy26qMLQoYplrHr4AICD7zSmWB3JJDu4zB2XWSgYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0DzWW6LqqNx9E%2BGCrcAwu7%2FsFWsR3V0I%2BNQqQS69Eopa5DwR668J7DhW1h2e2IqmhOZzTbmfl1PEfLBI5Go9rH4DPaN01tXHg9ipYHKdXBeu3UyRVH8VjICZNqQ5jw2PZuqD%2BDVPRndDtZ656W2J6AmVC37do9Hu9Mv0bV3ADYAvYIW%2BtbTN%2FCnyedjFgd%2FXGqqWJ8LOX4hg4%2F8vuq%2FRdtnjxUVeovaxiJI%2Fd0JGltB4xOVNO5OODTtOgi%2Bj9seX4YRRm%2Bse2MqfMae3SvFdi5OeH0cLXhIEh2l9tSG5itRdTU8VcVAqqFDSkOipTuy94wjVfEUO%2BHcTqw7fHIhdTNKvV6W70H%2F0W6OZeW8hKvJ78%2FZB9zusRCkSE7XTpKPhC5MS0S%2FdmUTvKYu1Kpq6c3tNztEPw5IGlXVx9tqaRRtirYAF272lOC6qcKWwKPwFjU%2BmmlSCu1z0vNugRNXIFKd125odLbk1XewW7nTXYjIK5NxVvK44BksJcFGRabwPB26j2AEzsYApUA5n1DgWLQVfoEY1uhlOue%2BbnB0DgVNvU%2BLEMOcX4i%2BqFdQdCZ9wmI5sdEj%2B6hNhJV%2BadXPhROMg3n1HmCv9COQ95zvKXF3eH2eS8gg%2FUmtZHixwiDjdmdHIS2sRnC%2BBSBMPmpz8IGOqUBcI7buZUru0qKC00%2Fmrw%2F5YAsI9JNEMdkjk2DJoSaWZrmPqVlzgemNLXL3jvHmohYb03XbIRK4nw3gDo5RL0CuqHG1elilU5vrAXhQzbiXf5y2V5GrqXmtSIlQomZRKGRJgMITVt7muF6cMqB057p4QFPXslJljgbcKgTxJjvMG%2FPjWPXZ0zSA9deYh9Os3KVKAPe2IoewKm2yHcV6GEllvDeNW0O&X-Amz-Signature=a2b75eb37d356709ddb1e07a180ee0f154549fa3911201190a59425823d7cc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
