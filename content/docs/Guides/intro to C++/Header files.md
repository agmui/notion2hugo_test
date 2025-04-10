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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLALEIMT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGAYK83pR1QA2Nhy%2FJF%2BaVeR0yGKsISHQCNm%2B1LqmKDSAiB0npMPIAqYRkItbT82ywgci%2BEz0htUkgwxIgDnk%2FwiFyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWZOSdMvQt8kWGkxKtwDznYrYCLGvUMuuAUJpx9jXICPP%2Bd6qLCE7Bquer0%2FsQqMtx1sVXU7zqR0EkhMVC33ACCoRB1B0PFLP7AkrdosyN0%2FxvDjAdOLi0qVgECG2c34S3tmrJu70shP8Gi93rD6YHsJmBs9Bq2F9CVQhIM6DMYQFPk13zy2g5QS0Gu2txNxVzqrT9NRcF%2FSDU6PE%2B61HFzifi0EpNchEedknq9KFBXPB0%2BYuqwCw1AjuuuyHYRkXeHDR9abhrKmYHE9qrRIg6yMv6SROWMY8we7rbukX8m1HfLB6fXqvHZU3s0xAxj3v%2FwRsjhMAG%2B0B7GcI3iburlVxgt11yqb75XTJmlbFWer8N08QDdo0WeAqKazkmOTvn3xZRSUL%2F1hFbUkjEA9JlHq072pN4xI%2FJ%2Fv%2FDCzIsgJHRKQhdWUX%2BTAndBnWMsGFiLHHkk9x3HQElGW1eiQbnho5ebYM8MGZ6SCxx9AbYSQhVUxT%2FVGdmcKi3UXVSwGWYGvsPbKTm2EgZjnn8waIxhH2r77aRy2%2BmiLTfjf7hmpuPrdw%2B8vOs9XmZdYmKcrpqZolrn2ce0jHnKaS%2B40tRM4SEiMnIXML%2BfYDUUacfh8eVZvv2aXqkNuv4XXyRebImxDqIXX%2BMgGq6cwkZLcvwY6pgEGNUKB7v4agBubwM2plNzrr7FsHBZUKaeTT%2B85QSMc8L2dAhY8kggdQeYmq5Rc3Ji9GKzvC8%2Bro3hnpj7Hjd7S6KkNQGnwWoLFk2NgDmEBUEWmrtokRrXfJc5Jyq2uPRCJyNwUzIKRFdBkPj7MUoKZpbYJU0sJz9AH4fTfcJeWnGXYJFapemTn7qISV21UHUZt%2FWEmG3ILGspmOxnvsga6WDd%2B0rXS&X-Amz-Signature=6e4d0d6ca2edceeee5ccd9ec3db4fdd7843877e78f4e8e4224597c327d272fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
