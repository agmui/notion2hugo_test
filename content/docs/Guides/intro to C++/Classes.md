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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBMGVBZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICUPNIa%2BJ8%2BB4H4IXuvz0PpfJS88dEvqj0G9AZ5ZmvwnAiEAvtjhaa9nOsN4lVW7mA5RNYTaZ6E8VewWXg9TSYLG9JQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDALHQzd11OXHH%2FrFMircAxZFemcKvdxUdaqtMTeaxbXvX%2BlF%2F%2BmzqRuOjMNkwB813cEugsrqAXP7uvRqS54wMOcONzB6No892gYaD2Cs7Jq%2BTOmlywNn3lvtfY6c00I3cHcmzht8Z%2Bd2AIVajOGRbLAg1%2BYJrAsXCjKPi%2F6OVDDOd3TfX2oyGxi0J07NHeQf14h4aMzMm5j8SSu1hwIaooNMhw9DdhuJq9stdjPO3kimr7SsUm7LXCxOEq6HlTPf8ozrRgD4FYOcQgZuuUGgBYWt2buiTDsL7qT5EWNuFR%2F1X5ZFtojAYUQiMPvmdBTgDdB5FE3HHR3uUzTgnhlwQsOr7HssG7v0xTCO4d1x8d1nTrMueEuxUnw3zhUZiTFIfLxpp%2BxbNr%2F0kZTjZOjKV5C3%2FABdWZNUXlyeG06FOEjZYLLNOWUvwHPry9%2FdetxVVAE9h8KTImss4Ri8ONVE7LV6IwVMJm7UpToq541l8ZLnY7Jp063AFhXuXzs0SDl3S5Eq4S7boJ%2F%2B7tJ%2FSGySiz5qid%2BjnOoaWVGemdbK6EbO8BPyCi%2BQf6umadxn3qg4IfpYQeeuCJpahu1Sv3gSNV73RbhrQTcGXgOLgTo1VXMaULD6dEw6J9ILjyqxhUTHUkKznoDsxdWLyy5YMNO8674GOqUBMj9g3GI9n6k0afUI7pHYseb%2BZdHSefVBv9zNd7LAOYjygv%2Bl8FGKKb9eYTKgbz3dHZRk2TZiegX6mgx9aqvlv6lE7ewfo1dnsnueKsQHx7CfOpY0WXXRyoFYAV5LyeDfwi2ufxeIEyzM1Zz2sK48RpElajw7sogX4tcNdKikdHiGAOIDuFgmFvKVEQQcZCbIu5ss2F%2ByVnyIf%2FBLJhguIQuo1ULs&X-Amz-Signature=0126104860f965a9e9a5e8d8445fc40dccf663e1a47a196b8e45b42b84694368&X-Amz-SignedHeaders=host&x-id=GetObject)

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
