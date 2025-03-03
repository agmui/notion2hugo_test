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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7YNRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxgHHAFkJkkc%2FkS9TTiRJHtwHOx9elvHftxnW%2F74togIhAP2%2B8YinLqFTKPd4vCBJrwsvxpbSeOjClbfl5gr0IgtcKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZn%2FIv%2BSwYNlMlXJYq3ANbL4BMWIpL5XJMmWq5fgCMbA%2BGTb9bFhVH7X86ajWXFhcpJ6juhX07krR5BtM1VHAIOOe5bRQoEG0MVa6lQUgNidYcn3ia426HhbLxl0K3BkvI1cdDmQ62KoH2abBGO2cYE8f0M2MhoQ5bct9KpzYubK04oOqU9JgPSf56WA5I5U79nww94DqacMqE5lcG%2FRDQpM9X%2FUrgjX8m9TyxJEiGUkA5rCAm5xwSmTGcPUQGS3ebYWlKr5ENUDZ8U%2BCwWNs3gQ6xZv8oijoYhMLa8CZkuLRLITghyjTdIeSjwJ5Q%2FEBswGhEy4VN%2FZOg%2FLyzG0vd4zglgllUTMht%2BPSZNJUgu7vMV3CNeDYak4H9xr6n9TidbNj5EuA6qQe6%2FKu2QdVGFsZpSnanfNU71n6caL7Y45CZhZrhQotska1hvHUAo4svRybnoUXc5AVur7ER8J0DdEtP0bZNye5p1OeMiF6aEqMAs%2FGGk1WBB0ZGG21R%2BmMVpyIh8B8NwLCAIY3ywOJ7H16%2BIw5vR4ZCoIu9xn50hmfHQ46mmKs7TJMBggyynUIDnzpdXxpbrBmwnGOolE8gJf2wOFSip%2Fg%2BYiHVXQuhghZOulc1NansNQIjd3OvsTBmtg3Pu4jgZkqd5zDquZi%2BBjqkAQP6PLcVgi8EgVm9Z9hTSiwaxHKFKgmOyUr4WNlNfnWNyyCrdob9uwZ1MZPsSDOcgxqnPgmbAqf7SJDU1hdV0x3WJVFi89yEtuqZavJ00jSRz6tDQrksrs9HkZ7Y%2B5e8Rd5DgXrnltAa7kXcXzhSbwfrBHVK1vkUayz4C8FXOp4ei66wAszhPem8gDNENJ1oM2JxAar905OyXgzJ%2F8D4ovFPwXgw&X-Amz-Signature=0cf97015ce3e50c5d27a600a90a352b4e2b09453da0c79fa6cd76931c3fd3ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
