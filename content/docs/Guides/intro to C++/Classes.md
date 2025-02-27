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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZONMMRX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCcRlV%2BQQzkKSRTLqg0CIcW%2FzdOzN23oVM8J6rGD%2F3PQwIhAIZ7FoBBPmI5CirYt6snMOQ5Y%2FYze8OlyE752eh2c0O7Kv8DCG4QABoMNjM3NDIzMTgzODA1Igxlknhx0qnzbH3f0AEq3AOfB2w90HK9aBe6gVDW4NPEg5pX9QaH0kkJsztUa05ylGxz8nMJXOo9%2FouYl8HP6kfA7%2FYhuZiepNX27ETyPdeKHkZ5LUQhZ4Pzk17%2FmJrWw8ZULmqEYZmGe157bVybIzK04YQb1eCEjswwyw7a2M7ZGIvpsh84dSBaG2PzGW6TrfOShASjVBwtyWdFX4xUvkhMnHnsJLcaFrsZTSu7HLMxM11h3ZL8fcQfjcY1fUBA6rUm4gZblkoYmav3AiMrYjojMG6OL7MMqrCxhS9h3JHUwDdYbqZuSM00lG3gbXmvcnpmq8MJOSGN5b9S5egTOwzzqzobfN%2ByKF%2FzulTVynn%2BzZYrhVqZed02rY5XAQjoNwrU5gLNknvC1N23cD8UamSsQhNpu2XDZ%2FYW%2BmSlMprPdjwSNlaiX5r9UD6HhWzjXbXObdAiJA3EtLwPzUIv2VWZD%2Bq5JrZ0G8luEpFZNZMAoYnU9%2FyE4UeHf9KBLEglXbuuPF6WY1cJFc8Dc8QLPT4%2Ff9RGG2mIAtDZ1nFwFtYgOdMtYUK0JrROu9gSvjbbQSl%2BAUfuscCuVQFBIjHmVwNPsotYje6hu8gg6MZBpKmn%2BEeROGAthv8SpnZV0G%2B14or6%2BaFKFZlL3zzv2DC97f%2B9BjqkAZLUUIR38ucVqPfVydp9BrAYsZ9O8SOd96dqq0Tlzzj3puYzTsaTktXsjOzAYpLzeCiiNlaLiMcMBLYI41az%2BgCe5Dl0us6mE6jwZtP2%2BFX1zM9mY9fBoQZBGGq2CqWlTZt7S4PIEhl2KQDPz77ybMqrTZYTLVqKxcj3bK%2F1bbxLwBg0gt%2Ff%2BIoqf5e%2B%2FsWEDrVAwpqEafnEEXo5jNOuji2DpJzJ&X-Amz-Signature=9ece5151d7ce057d5b3606a1edd71db63124a29b9559645deb6277861058dfed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
