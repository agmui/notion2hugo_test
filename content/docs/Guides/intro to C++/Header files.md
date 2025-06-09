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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2CHOGD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAs5dxFJDNRDGovMlhvyZ8f17xas3UOFTpTQeUHh7hVAiEAuTgqX4PtAgIDughp%2BcDqzc8K7h7gsoYQrKbWcUMEH%2BMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNX50l1LtfUDtjX8yrcAzZuyCFC%2F%2BwlYvQDj7gf4CcyIHHXxvEVYkUabJON7sjCXFDRmLBmDoBfjXTZa5dGaOTkW2EgoUANhDb7jS%2F8kiCYATkgrdpMYgoHm7jTcHmqOpU%2Bk86tIIeCY0hwcS7wItYTwaMY0jS5WQAvXaQ9lAYQ76IVtlbiIHH2n8CzD6BT3M91RSNbZYJ6JmgGqatxbtCh7XEE6IK%2FMcD1Pqiv4GxJikZR1YQshThiTrTP5lJ1AOCcBVhycNz39Zxt8QjVZXzevci9b4dmnDWdW%2Bmt%2FhZG3pfujws8N1WzBT0oQkjKKQGNkNIK2a8N1fKJ17GYKqNkvvSfA2Wc79Emhh%2BPgBL8pjN9R0Lz6Of8uvNXHtMHFWEAy1RDfpYSoNva50D2DSYAEbcrwbU1AB0ikJkjImy8CzHw6k%2F5vIceei9gfZuwZbQblqZnJifJ4DzJEEQlZsT5YuRhWNsSmt6shsdF1UFfXhtgpjcORosSGxdQxmVNlNLoGcllQNXtUhjsxJ%2B5E8V0o3QnAHUHTbWwwH1VhMhFe%2BarZdW7b3AVHd38yBCNLw732NCeub7AvRzh9oVG2JQ%2FX0L1UgNZVvSGmWFh0El%2BTSggU8s68moKzN7BzH%2FXcjgdbOgMQD%2BwzVtTMJyWnMIGOqUBFsk4hTNAKqUAACGENdDnLz%2FweQLp%2Feu2IZGexH7%2BRnBlRRiUHB7JUFxOTfgAuokoMGjWjfIe%2BpbVuXIoOmzaQ9PDxka7WooBeVfzQ%2FZRnmPLw%2FOHrkaIUpd3uH5Kg0FzKE9yO911nK6m0hbcAnIDl%2BvWyU4yHy5erPyKsJSzopajvnF91AAy2I3VbAOXhxIyOxQ1TlMQ6d5vcIO48lUUsJ6DJWJB&X-Amz-Signature=8b16f0b6cd158b738cd7a443e8a3446b16a07b03e5396e1ae7cd1418bab847ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
