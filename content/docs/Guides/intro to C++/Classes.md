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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625H6M3VV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvzdAxlyRErXtCN1XDSwvp3fZwXVLqYNqHYJdTWxcL7gIhAOop%2BcA28PF2U%2BMa5S7nuK%2BecHKQqQ1joLtb5Bpoc3f4Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxxUniDJbH%2FxcBUD18q3AMW63P3s7crhJKRJnDR7knKk6cqG285C9acjyAb5nNNXj8Z2VyuFM%2Ben6J145czugp2kUG2zLO3F3vTKgNq0ewi6Ss65Xke6ce7GknhNZeq7ez%2BQN8iSKPvXdfI29v8r4GgGvCO2ybaIcBlVbiv3NUmr46v8EkoeeykNCxzuI8RCO%2Fzw%2B18k07CBDsOJJk8%2BISbuQSJrSQAEgjaf7Mit7oFdzXKrBXhn%2FuJb4dlFSeZTittCujWIW9RCwChoKQZ5Z5WTmP%2F0sFQNaSk%2BjDowy0coyoFtklSgUXf%2B5%2BBdf%2B1%2FTolR032m%2F8V3V4ouCEDWzNgEPzHEHf5cIjv4DEokLngJ2w%2B71wGSskjvfpsYl0qxw9wzEKYi6R2BfyLzbFeXeliAOhmWwH1H0VOYoKeBhd2L64MoqAzBaUgzUHiwQfpUF15V6cfQ6UPIvpBYU7qeUseCrs6BQcR4PlmOPle4B9%2BoY47ftkQ%2BGdeY4B3OTILF%2FacLuvB%2BTi78skAHg84xTqco%2FeHj2XX46eD4%2Bz9LOjR3k8G3K6E0ugKt%2FeuS34UNQJFJrmR79dceBVvZjjXHLPz26%2FyJZtqGuql7%2BripBdeEGtcJH%2FMxTs5jir6gHPgIZ0947UknLYbEfXKeDDLhKK%2BBjqkAZk9f2U8avBVCpl%2ByZxINiWAtN47d7g22CkW46znuufDUxvU3%2BqhT6%2BK1go8c6zZ0WPvVSKvLYCSb9B4easOD26Aqb7tI7eMW7%2B24vH5%2F7I%2BBxQgufVVGJFODP1k6CoyuODOy6BUWEmYbLZAPeIPbCN%2B1eNkjVoLyjRAXuVKmdL56P9DIG3cVJO3zc%2FPyqL9ZX9hJweqLxpsNkqSTMNbhJyq8JVT&X-Amz-Signature=9a327844ad29cfb02c92635bac14f4f9d6a3657460e77dba120d2bd2acb0c6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
