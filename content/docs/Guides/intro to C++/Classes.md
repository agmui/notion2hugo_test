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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7P4U6UT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWcTwk6hlZRhyw0G8iTeLT3m98HqwLRIwG77l36mziLgIhAKCG2rUJEl%2FKoFcLV40gNd3ntHaF5S56F%2BKKPyX5cRJPKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPfDFTjfFnsCQ5twq3ANSG6Jd7flsDrX%2FYc7OFk8FVJlje4M6UMX6HMTGDl5ojP4QYLU9cc8IKT9yaT7R5wIpR30OGwQYGM6GT3rDDoSWAvnNcz%2FF%2Bzn%2FTVIETHA0sb4dUpp7ggSd0nG9VOG%2Fyw9wuO%2FNBOw%2BhWMcok5lyu2HqZwQRoVUZ7cZgmfhxXJ4nAXnI8B9J%2FH5rMTt6xDFjZIgd0a8x98i49rG9VEtMp8Nd2Vzr2m1HXk5M27IdDNJTZoKg8Vjo5%2BFt6rSOjRnh1eu0fZvEVQLO4ff9oZg%2FUnjnJfWJ2aiwVn57PSabz9kSVunww4kQPP%2FsB0CvsRikX8OX4JLZSXrcMVR1VIO7xcaycnuBGaTxduq3RArV2DWUcFx2PsXUktACg8cOce%2FFsLZR9ydDNnjAOu7yaBQTPUgB2RzBIk3sI3Cc73RkgiJ94rxd0QqmrgbS%2B2O4JdVTjmnMlGpAnBRzKla0Ceoqao3t%2BGjzwXdk9JpLS1hVVU3Csy1JxP40oIbzQVLgBYDyThFNXcABAZQ0NtXLzM5UtNv0tkq5klFexB%2BNoIGAZHU5fbfccSEMX4fB55coYQK7qyVuYS9gUq5LWoV53SHg3ynK0r%2FDb3XADSFztdO2oP5ixpScqQCS57ev8kYGjCvrue8BjqkAUgU7UXSwKSH%2B7Fs8IWGBwM%2BgagwAD9f4kKJdNOXCP3AoeWyHOjiKWgAB2XYth%2B2xSFXC274AWCXdnTz2WZwai%2FkMkpY5DCneXDfGgH%2F59Bn73iSfnICQ7zJ9QyvJ6%2BOIH2%2FUWxh5jiZRTmd6zb3jUmdk6C5yLOc4F2mRX4BMdMO7vgSeWs%2Fl4XSWmRrvZXsa90M426fNB1We%2BQo47IPeb39eQ5r&X-Amz-Signature=d437f1f8f965f135f050b3a87fc9bd8893176a08f2c9962ee4e08b35446ddf54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
