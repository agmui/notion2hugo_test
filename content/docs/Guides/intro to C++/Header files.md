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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXY4QTX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzJCL8jQ6V2w57VEhf8Jw8aNA0lheHPKBAuRL5xY8NhwIgVkjMJpjufzJupNUeQysPwx2iz%2BnP29z8GmgHEkkr3ZkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDbaXAcH1gX8CtEZircA9Ig%2BV%2FL%2FQPX6%2Fgj2FJ7djKFAIRMNH2n71L5uAM%2FOSFRdPfPN%2B1Qmg749CRMu1%2BKNs0jbg921uLgydDxadufdpN2lJSnlqG70l8968VXUHGE8MxVdE0phT8Iwok8418Ik%2Bg6uIMf%2BcZFkjnYIGGbnb70EY80NZohMOS5csEwo82rKbn29jQNXt7a2eEav9dadwa%2FQJLp0JchY10lj6dTSOWnOfnA8tZ0rytdK%2BPqU%2BnRWd%2FhCtBrVOTM0TnIrAjgfUcTBM%2Bz7uRd6UHTCfnCx8tnY7ntUrggbkc4A4CxjagU9y9LWfAzkD%2BN1%2B8qY1ikYPS5R66sus0QsQB%2BdJLke79GbnhvWEwog1nQAJfrZRHBSS%2F5AaUV9Yr%2F1%2F7%2F0nj783blQ5lohSQtUfgTHlCjBEUgQQVzzHcDlvmYTe7yVrYOtZUIrZuwkGiAflmYSEamyjBHZHVEteJVG67xfH%2Fbo3MOiUDQz1zDSPLlWrJwg7Dw2Ed2Q3RPzKNhoUZZXDDxlnvAAflxj1M9G0%2FUWukdl6RVNNcglRgWiSQJlNjbOpPLG%2BNzTJgNj6Xdwsiy2begT7xQrGbSQyg7eb8w%2BR3sJMFgt3kSRx8aIEhKnK0cmRYLoHsy6BCtkDw8LrKfML%2BDtsMGOqUBbQJ8rggGzOXjjYIZzWLKlbj7QIcrVSwhAQjvIwHucagXHBNpqzLcynkdYOgTPec25r2jmA9kVjvZoQe8Txf82tI7qNNr5XzP6ZO9tVxXzDA7x7QmSn7LJT9xamHrulHTvWcDfQqZAwKdPWM0AenFCURzhhvAkdSqYhmolyNJBRcfVcM5WKSWz98%2FSZZhjmfXHS4dvbTC79EYgc71kukHyKom9fL1&X-Amz-Signature=290242847de6e5a83f380186dba14e1c0be052d32da6960a5f2a93b18ff45f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
