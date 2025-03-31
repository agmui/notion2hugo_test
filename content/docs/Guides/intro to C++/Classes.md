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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OWWCLU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC0c8of0AEN9qTzmbh9RuZY5lVKBthIqpyMx%2FJL2LGsBwIgEg3QjO4vrLljaX1FtYN35LL67asaVZdGscEjbGU1gsMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoiWfXsPaF5vN33DCrcA9HlfSvV9AJdbN7QWxthVAk2IBaJccnZxYSObbxcvgnj7UZ3I6A3ojR3haoIXghulqqsj15FwBySBKYyK28KkTTIpMLZQV0dGq%2Bbqb9RNsbGaZXH7PWS8EbLCjtTe7ECpE7OljM4JM9X1yWeR9Uyc6OXjtzJEQNNBbhNwLMJVoroy89mEyUeyAvGB%2Fk4ErsbIWxsBFkkB%2B3VqvhOthgPMGHjHaOZeYi29h1nbImb%2FQ37JF8o9V1kpj0kxxnLOR6eDjCuOFIILHbM48JTNzD2DOw6BK4B2Y1PNj%2BFWDd5fJPgV35RtV7dleSeQrtWf%2BRppiIvUZtBhnkUy2tR5e9NqoFWzHFzZqMcg37P5kdo1hRovjTWTKfsWdk9fnKPv8OT8qBYDpiAmGVAvo5rB2mOliXoU4K%2FgRdWJui58LOtvuvBry5uwuH8MK4cWTkt4%2FiX8gK5Q0O%2Bn62i7RIbX87RcY6BNIsSA%2BDO7o9OkKKjjTlYMO2Uh0KVHrFJ8JHkLtdR578iea0QjuDjO6uOq3iJVdu1m22umMgoHJBpMQWfXODct0l4dfAf0firP8moR7LdY8TLhucLtEqZr7kOGLaLNjHwMy9YQZskj9HP6wIsmU8F9yUb73uY9gQUaTytMLe7p78GOqUBegE9Qz3T51i48cfjXxSyh3154Ue8dpI9NWEmWrLn36ZPJyh1UIqcFNEXjkg7dDwOd66OHkw%2F%2BeRdnTVUwrtoJ0lvrTiQVjU%2BFeewnGQu0MQLmT6pVPceErNPM%2F9190OE%2FR5UVkqcD0nNJaK4I9krU22HaWbHHptjD7BxuihXQfYdeW5jFP5CG4nRh17pM7G8P%2FcxK44v%2BUNXi0Rjr%2B%2F2jByJiUYc&X-Amz-Signature=c4c852893a364f895844e1c7c5087296a87bf2ca610c03647bba247e4e876d06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
