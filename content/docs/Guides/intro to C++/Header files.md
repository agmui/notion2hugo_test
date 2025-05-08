---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWVHRNB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkioGl15IdhavvCkwlwG8VRGJFLrI2RAvXgvt8f0rEuwIgUgoBwQmFPf4sLwAmeqjswcNWGES8VbgyA%2BssSnm%2B3GMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD3dKakaUXRo8Rz2GSrcA%2Bv5quMFiGvoHy0daiqk3hD%2B9UDM4tE5nePzqK%2FxCiQqv%2FC3wlPcv%2Br9WiWJ7y8ldGSOcLkD18KASHB0fZmuP3kXvoelZpYpcnEkyFS7Bire%2B7T%2F8n8HANgLHIG68Zuv%2BzuPksM%2Ff8Cscq0GD%2BbP3UoolAOc2T3tlYxCFDZG41oCgeK%2F3WvsICHov9Er8S2sKFkARTKdN8p9LBp33MaB%2FU0BwtQ2HWKthzdQa97lFUYXJGjJz%2FXDgGr7CjgDYXX4PQcz%2FLIEZSSFmGwby0QrmfWOKgOTMeDF5y%2FchYg1JvnqpzloV0jvejum%2Fem0GE%2B%2F0zXaRDyFq72TOTu%2B82uRwSetLbJU%2BWqwtuE9A5c2bILhVC2IdTnttEOD2eETULjFvIRFF1QoUTztpg19xtjnAilSIjMVecg%2FzDZcZfF9PdB9t4T0abLFniJp3%2BJmxayk%2BLPhJc%2Ffbe75wp2N8QjqiJgKG9d89uJ9m3ttIh%2B2JPcZQqhCnxjcqToguqI4a%2FWaar5sbbvyyufrE81XRX7pLClrZwWQMuT1GZPWidre84FLaFqdOl6EZRUaD0Zn%2Bqg8Noh2T412SEWDP9qKrrutENDHBiqN%2BQAAHcoFgXpRUqbIVz3VadUg9%2Fvx2WPyMI2088AGOqUBF7F6jOx9Al%2FgvB9CKXDAZdwegVgB9d%2FXsUeGJkHuWOPs5vWuQNAZueImiTYg27K7whO2mHCyEZmI%2F9ffNc1r6LDUYyzDgUCYdfJIx5ZdB41MlAyMwVVvLeOcfHtqtgW9YlGELyhHh4%2FMQNTcM4EhZIeLbwJMG3WfwxgJM03i8S0UhLl14VIyCozXshu0KR2Yvg38VEs5tTUKDc1wipGdQSLIFk4x&X-Amz-Signature=acecc9be7a4bd46a3b3443b288cf264725e32eea63c91ed29e1cbf4dc5629310&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
