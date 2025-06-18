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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAYKMVXT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC93n%2FzdAeDtrDHv14TT%2FcfxY8l2WqxR6lD07L%2FMDu1JAIgL5Nwj1%2BaK37kmbOyxoU0Br9aAxG0PgSsUZltvqj9z%2BsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDA2PNFx4rdFbkgSUSrcA52QGhtNGewCWMnPZ2kzzCodwI0NnnczhQQBhbCuopZhsmQ0C3Od4YEvJlJr%2BWCZteTp3h0o5OPDvb0RabBjMAo3jHc6yeoXkpuxeQFgfWg%2F5hlRHtORXs2SIr450ozJmql1F99Hvo6pZASff%2BnItf4WD4GRZCUmA7FovLJzagowYCMlxLQd%2FFTTgY5l1yG0d23QfcSBq8zdF0yl85kFhLrMZWuE%2BYKcJV3m6OlDnfcogEDJ6J6MiUgSbbvNG92yOlO%2Fd%2Bd328J6PdB8hp6NkePhCPyPnWreOoFV9pkgLASVQEZdoDyca0pXl8Eji9Gc5ZSIgZo2xYDr94E7RDhWaRDQkxwGAhUw5UTK2dIRXqIHhJjjY1PEMJCSBWed0bqRyp0r9tkE10bk4jcdMZxez4bRXrwf3KVNPu5sxLNlGvL0ZVddlQI%2FIWBz5GdOqf%2BZTsFCj69yDZ95rCk4m8ddFQRcHVAE09%2Fqd7RcbeWy4EnQbXiEXByN8qU8%2BW57nnYxraZzYa9m1LUxtl0aJWm02Wa0hJyl3%2BcTkxtaxuS5RFkJhV0UeOGjqL%2B966fhtZhXZ7DGq34Q0ve3BfdMBnYypDsK2cWevaHs3UAopqYVnIjV6Jhp378KEB%2Ftn9WWMLf7y8IGOqUBwKDXe6SVshK73VIUVazoKERJbgOpbQ03NGciKWfMulerbdYqTiZO1oB2IbhoUcSDX%2FxRzkLkch6p6MHRwixAGS63q8EoFwvt8obPfa%2Fr7PSO32Nrjl18GNTTCLvInLi5pLvzlmgwEHlEc5%2FZ4ctJO4RubYJjtaz5SfChkUZuJmKJc3O0D1GPyGY5fdWsnmMN0PAmLtNt8qKq%2BmM2VUiJ3HhFiEfw&X-Amz-Signature=78513959d137c8ccf135b1b7ac8f31899087772ed1d1d4a7f7460604f7a8429e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
