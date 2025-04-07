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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRLN34DK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqRUx3RpYed5pWltgk8bS8YrrSu%2BodOoxlRdIo9UuPuwIgTOsnGOaMPkKHv9gamc3en1THID0XwSl9Dml24SRlZDQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJLipFn0rYTT8d1dryrcA0xx7MQHRImzko5i1wU4PkvCClcDistPh%2BWsi0GM5VN7exqSXIo57gQ1%2BB5ysYblwMP%2BwhuxKSZfHoXe1whWTBQBw%2BWh1WOW9ztjZK6jlQZ2zGQ0lXKfaxiW2Qe1IDObYM0Wb8bWp4XOl4hTNpNcOMfDhBARNcu1matBubeKpRx3aj7VFr2%2Bgw3L5mHHGWO0k7stbPCm6Uf80eqWzzwnj08YPshMpJCmBJbkOrqMtVUViR0%2Bjb6CDuWfYla2ze7QdCaUhve65QQDZa8YchRhjEtMfkaelwfzpPtImPii%2BBrd%2Bq%2BK7%2FIUG2RfnfdamafGXu9LNWhNxsADKwTcUJZmHOFKG3qyb%2BmyZkRuakTWJsg3xwYUr35D%2F8GcLmlPwRfAy40s8EGZlQfXb06m%2FRVNO3XVl5oPZ01cypvst8SOMeTUaqdxAZfZWWceBaMrCYAvfDp84cY9TNcUTlQzOpfWzqo5TzYaOpFRICB94wD%2FP6ymCwq9WU%2BLKPT76Y34RzE04tHA1o3mZRO6qCpvz99NssgbgexHlTloRaWDa5oIsCi8DeIMw7DB%2BkddVS6nXg3J1xMvlP86StYWhHWyGQhm3w3XtRranAsjn8S2fKk67csm7aLG55oFyQ9GR90KMKLk0L8GOqUB%2BFdhgnnVifMC5aEgGNaxYe52hrbBqAbGFrYITTE%2FfKVLEkERLbxcW6X1%2BoBN2MKGphP4dydjTAznC5hq8uKLYlvrGQRB0Nt4RQ0bYAUQWQDOI6ojMgYb4QkCdiO7%2B4bk%2BArNcBMgDUaJu0yQNsG68P3h%2FwDHI9DzKAAaOQDTRhCi7wFKFK8rtMnr1%2FiJwEhBF3qXnih6WTtel9aHQfCgJmA7oWg%2F&X-Amz-Signature=0931e96d283026d820770d9ae48b103294697bc6e8dff5a15582d0dceef61b67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
