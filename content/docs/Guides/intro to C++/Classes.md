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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WISG2P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDSuGVPOrrZnBTsJ2vkL6If2VRtbrs74zVCb0L7iYFloAiEA0Cet12IxPxlkZxvVjcWYgcI6ZAp5qDj8szAYJsYi8Vcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFeNQvO1BGQhaQ9nfCrcA1DUWmN2BgE1e5pxrrO2mMviZOaLXgkIJDAHQblLYrtx2cHdjsEJUSGngwS%2FNm%2FKSP1ujXl49kUtUfV4yXgAL%2B6Heqx5gx0gT%2B3D3ObVfpd5uBsCBdvg0wzZ0nMjB6yTN2iXx2bWwXJ7zFwueoCv1hY0Ij7pajLG5a8OQIAuAW6PNJlV6DgdfzwNnBaC5gN2XuRZs7DArCHXBzeaIZpt6dgifoIo5akGWMiqTr8qqsEhATz5t95Ge8ZksIgtpZrXzmC0l7eUlV0nIuL8NshY8cX69Avz5MWi9KEPoz3n0lQN2kXSupSjnwKgwdVnQU0w6p%2BcsCl4zDEoeKrWF%2BDQSKsU6%2BrAyeGrZoFTPi%2B%2FzO%2Foylz2MVu0p1pMt%2B%2F3WFc9Snzi%2Fl7Unq7qh1kJPVHglX65A%2F4EgYep3FoSH1Qv57ebiM34Hz%2B0j7l%2BRnWZa%2BBkHlYVhbgExd5KuiC7NkbIzwhwcrbwAHOUzTTr6nL15LKAV%2BX6eTSazvKuFu7csyaK0%2FkYo1KTAvLp1jEyCNs9SJiFgyq7oK1XiQJ3z2mtasxL7jH7GxW6erFTe03jmGcDe1zbvPZFC0%2BUONWlx3KNfchEtWR9aQFtaE6UAxfxfKrsa6caL25r3JINY%2FmtMJjUicQGOqUBpsNEwxwVMe0eiDtkE0IzACq7b%2BKQoTW6erB8ySfZ55rF8vkU8pKWGzdldQa5nzm4UpxvpHjvscpIGY34tuOWl2o7q3lsfeiGxlHHwJ9gcjsC8p9yx98zVZ5gTCoYJSI9a%2FVmDWKh2sKFiXuiy4V8XCjdU6tnz4yOkZ2D19D7uUh6wMw2do1%2FgpDNjAtbfL6WmczHH9EUBJkmyRaqSYrvimfME4FU&X-Amz-Signature=d7cfb026955dcd1e0d9d454bd041deb75e7f685fbbae4a8e8838403b2eb57309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
