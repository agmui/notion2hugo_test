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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G6DGEW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZpO%2BeQFs3uSzC1toKlXC5LpjYx56P1KdcJ99ODtzG4AiApq8qAqOWHmP8a9fhT%2Bz5KQOKXisWG6akIAi74D9C1tSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8QOlggJ%2BwU%2Fau2nKtwDDwrysTT3WuIUtMcnGyVcjoxVYkt%2B6Icd3jq3%2BP9wJSPan6nuI92NCiQIxhd1LRPJ1SFFfSJKpzMFh%2BXpkcoyNTeJo79DJfVMXO8iab%2FvVJ%2F1c2Hu%2FiXlDoaTjVzolQAja%2F0pzbwfjgvcSmssr8fT3%2FftEnNLj44ApTA8%2Ff9Jb8SoJMf82UTsOLwIWXX5KagWrMW%2FUIzWS%2BTtiuGDrBNooYYxNOBVKBUkellnsqdnU09KdhcvFHmotfjw2q0VbGMNnHks586RpB9brYCshx1Sc6ZrEFL333cBqfkT93a7oCsFJTtuz5yyz44lExQouBHJMEtrsbqflCWsqWJiMZULhxZNdnDso4dckyRZXwbkteJJn64lMlKvLlq6xQbDcQnJRQ8gOgf2eCp0FapCWAgFGobYuErtzZbjyOYdzVA8DLmrbazlBQfF50cXb18Mga19xx6r97ug%2BMklYoTfu%2FUVdVMOBuBByf%2FFA8gkrU3z4YXCJPbE5OHox06zfpexRFrb0NdF4zpn0X4Q72%2BaIMIJZf7MN9CCk34oEJRxyhpDOVohXivMEQQLlpd2nVzpXR1%2FqoJ39Ou7g6kkDh8A1zGJw6p%2B6ZdJdQHpLgsmR8xjoW9yl35VXWuQs87bnPYw6rXGwwY6pgH8H%2FVYB22ZNStyGbSqESs4iA3wGywDyxOvqIXqZxG5DXBRBbWgs%2BmLxsUSXw4QDoaTRga4n6FfHm4RA1dKB%2B8IvBEZsX2uuvZyn6dkwonK9TIxvnDLxR9NVhAQuLtIxtGXg7MC8daPfVLRemtSLLK1WWNjIpLiNpIiVRkX7%2Br3xvN4SeNpz2JJVGZ%2F9EZUKfDRFw29Xr%2BcPoMPNXwtSoubN%2BIKmNTz&X-Amz-Signature=cf336ed861c8ed249c95fdc1890316f5c882441e903ca65addc919b775f2b0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
