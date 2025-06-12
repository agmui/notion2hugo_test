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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2ZBNM6W%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCQHNlmC%2B0oMMbjykeCq63Qc3SXDXyUER%2FFrF81AXH2yQIhAJlxZHhvr8Nd0fpcn%2BRezDgVk8xStowY9AWMgSgI9FrWKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX2RktZE2f2Skc1oYq3AM4FnOFlw109JIJIUYO%2FgAkDuLnXhSeGqCDnB%2FvthHnEeB5kSCUNULgV8m9%2Fz9ggLi3jJsTGfKxNYVQsmb9glpzJEax0pIprH7teWFrOrQGvQ7yEJrgP0FA3SK%2FW7HzpuAzucuGku2eaR%2FymgEvGmpQevaXhV55dBwT85kWbi9RUm9ELBIfO0lBfAObEWD2AX584RbrG0yNLg0CICLTu6VuMnYVYrzWq2O8kjHFmO6%2FYyf%2BcmTpdnQgXYT1%2B%2Fo2oPkW5zlZ%2Frc%2Bsp%2BEo6xZrRPfgPGpT%2F1kw%2BWk5wtICMrmhZTnPHW9w3aeuxdKyM%2B8z92rQdrErUtTwgrqw%2FIH%2BR6guOwHCNDqArvzws4VrDo%2FoQSWLKHDZD6EEOl5I2T7u5ZegAWSR%2Bl7VPZ3elHceQZkd5DRWZ%2BdUICUMaG%2B2P1yquy0pEy4LOLUqI64b0LV%2F580CbU6h22wWkL4vBnGnj846ZD%2FHags1n6uPRTJhac9fCi9hNRj3hpLwx5QJTZrqGIuVz9UF31vJrt0dslb6s0s4ovWVxVYOn4bYhkWybM42E61ENHK82ZWOSBk5GYxQb3rP4shGJI43Yig43eBWb2UVNuK0%2FAnLf9nxuYkyCO71Iw55D0CxmJvSMdITjDctqjCBjqkAXqTNMBTTZSxw9RroiCCuC7Rs3IP%2Fszz%2Ff%2FkCO9FNPHEkQceth8nG6hZqjcl0NQVHttmZOrkKPMFP5q2jg1RtaMjrnaguAaCM5RgWs3UNmJIAwXqbUsseBXvt1RlJ5gtXyXJJXjfWemwoFPMVrZLG3DqWl%2BJTGOEaRqu0mOyhoFG9PL%2F%2FT8xe5ZTulnWsc6etlc586H8BieoEtj6Cku%2BIQ4M9nFJ&X-Amz-Signature=eaa7be7e21ecc85ab28ec76d4be1af866889a23ba7c322149d510f9ad016da9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
