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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGA5EQ5F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzaqXVXVEd9RmTHWqLzjrk9RTkNRsA7jQTxQyDLIkBDQIhAKHLz6WkJHwMZ9f9twXa9kyHTM6tOqoDqaq0JFMTqWdtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBnIH871BDWuum9hIq3AMFOMs1%2FzMCV6OjRPOsXv%2BsLE6to2DBHaZB0R%2BxK6ElRVL1ky7C6%2BQzpd%2ByDlA3E3Zo1CkgnGYiUPh%2Fe0uf531v84UcslW%2FqeYauOBn77BZlGvlgoMqh9tpBidQCYukAm8rHyFLxNXb0SjvlXwejb4MSjw0p0p6TQcHgWPado8EKWdzJoS6aPXDRqsUjv8WE0FF7Ovh58U2YKuGhimzDi7EfxNO6zQrJQxFncM%2Br%2FccE6uOnEoxw5mV4ASJGgo%2B25EKRGzwhCMeitUBdANHdohXFZRJDsiSVVmvOjtfTLQ24WFyIoTPszAmsY8CqQrgSZ06HFUsqZx1CyReZLgJby1DDPmmgVv8bVIG5%2FtjMDGqO6Nw%2FKKKFiezNIz9Z5OILSZP3u%2Ba6Pzix7kFP3JT81KWlESdL9tIrUbSgc5V43ut3hljIAZzfx6lHBQr0PAkwZbz4k9SeK5KofH94zpgu78HWkNpMnrGeTdHGKtIzWGmDdzSpjeWjSCRvnHPYXeP9Ruj6ljtvIfP117ic3TTZitIig5ztLfH2W%2FLN2mYwwOWLM6Is4XI4fQgZnhrkhviZnFB4nC4QzGQNnYRaHZ7Msd7G2JFK5BC8SDPTak5BDmoMHpuBOV%2FlQdry0OmpzCzh5%2FCBjqkAewkbNjeRBBAu2Lkw%2B5ysGl9mhdUTEacb8TEVbOnjpsY%2FY4qxw6BEVTUBC3nNIL%2B0O5z6W6%2FHVvQGSbBJ0D2lYB%2BKDDvNxE5kw4EDzyPQV2CK869bc5HujIPh9jap2LBvPh2cOcPJwd1pjgE%2B4XplnXRIg8rzjd4zaMQ16QXmrye5P5oKWhraS%2FNf%2FTHxF%2BdSXMPHnrEVgwf4aZUqkXfr29EVDVT&X-Amz-Signature=7d2d9ec288bad17ecf5c9f22247b25d9cc19ba5d3d1dee4e29d0b3e06506d282&X-Amz-SignedHeaders=host&x-id=GetObject)

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
