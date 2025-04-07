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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRGNNAX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHwWS8amiGmEWODDnzD%2FtOVqW5o4ZpT04tJ9p%2BbGbtBAIhAIFjpv%2BhP8PnggPlorQ2sH8JekQVaImvB5a5UesRYxWbKv8DCFQQABoMNjM3NDIzMTgzODA1IgwvdBY34cnUoL%2FCURoq3AM8t%2BbBeBck9S0hWofmldxpU5KywYhkopsIfmIaHU46O8UH2Djdpc2mAkK%2Fa0gaPFHgKQOXmZM%2B4uLR64UVs0LbGFuse7ljRYptGn4S9KvPBVI280tzOE9AxPicnj2tm6QW2nGvxAoDcnKtOBeeyabCR9k%2FRXyWBli2fAE4Oakilk6%2F79h9j%2BwXZNaNGm1GNlz%2BowzvfyIgh%2FosLaP3dA0dFlbCgK2tRRs0PdQhvoQ0u3RBDz9N7RUHM%2BKVLSSkNZ4fyPOwLYNEUa3dCet35JId9tE%2F3ERv4Ce1nCcvrYuha4erqjVT%2Fs8jw7MXx%2FVskbJMWDJAXn6bFdOFpeJz45oWFvIqFYXZfbLDAlHcosNEYn7CWKHCYr1pI%2Fglg2txtblGITMB1alhb7k20wcgMtw7sE8oOfC09F1MRJ25HFI1TcH53HY9jXr6hkM%2F9NJlCDPVP6NTFDavlQ1Gn0ZYTS0th%2Bp59%2BUDthjBluRdjBDmHL%2F0ys%2B0I7oFUXhnDkbKXC4uBvhV%2BJW4BbqZRE99KodCSDV%2FHxEXqcQGxu4HCmfR9hwqgXdyveCzDUYLO4hGTBgDwSpIOns5SlVxIT78KVWk0jr%2FT6jFwqwkH58%2FVL4pIWaIqM%2FpKgy%2BGmgfFDD5gs2%2FBjqkAQ0rrzUixoSLWUKCVwO5%2FibFz3lIksjab6AjzvQGTiE%2BNHaR03vZHxKjkj5i4oakd2q4VpAnY7J08oBfaZVJp4msZ0TU%2FfCZXfUyLAz%2F4T7rOw6UbQQ%2FS1Kxl0tYIFicgYArY7tqWNNzPmH8yAvSN4exSfD4%2FTUH6z5GvuUGBpRuU67mXsej%2FnWpAs%2Fz9Seoxn%2FJcFqzgNN%2B%2FvBggroVzmKWpQ9d&X-Amz-Signature=9fe87d63b6c69a7ab4821f34b164bd793dac03fbb2e16a348692d25961379a22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
