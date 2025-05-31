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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CN7BK3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0VG5aKiLhyCJJPQNHLhCGom4dARUl4tSuA02rTNkHMAIhANOf75kihq%2FR7d0yPKsuwJ9qOnRs9aZezMC6U6YZEyPgKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzco5mNwsQb%2BwK%2FPdQq3AM3OjhS%2FSfGXrEx0D8n8KAWSa3ccYspVUxy5xCqrNTCopMSXOcTGZQpZKm7Slt581wnlChDXsfyKHYUIBY%2FhuIvOZendjKROKA2BRtJB7C8p4xUDQvnOTFmv4Wkb3R4VkFgvL%2FfKx10Yyb9yo4VAmYKvlDFCWxcabkHSfvGwM64Nw7Nm1zZ4NZz%2BWewa7XTsz%2FwRL5L3LzV%2BlDoRIrpe9orpqRzQxCBUKiguMdMxeNsaRRaY8GcqIbBC43ps8ild2JZLyCeaH0N63RMjaGn1V2XOJEsCxi27erxUuK034%2FjeR8K935B88QbAnQ8ESC6DyExkMQ5u3i%2FOGN17kNE4XCTWEgWbxIaducLem%2BhBN8FkPNYPgzip8ez9yiM3ibYnuhx68%2Bu1PFf2yGqHQ7RM3pWZjojW%2FbF6TvAukDdEpiy310pMGXIYTV4cxBFTcA%2BpP%2BqzsqMLRsfszufbLD1wYZ9w%2B9GwQgMqDKtRVUVomI7KL%2FtqM0TipXK%2BK%2BDNZEeGBT8o0Msa5m1WklYgpE9RHPRfoqXviXem3Ni4ZfVSVcmHveqWLazS8Bx2WqtCWLPyudpQja2cvnQgnPzbHUBOiMP95zBWqkg4BIK9LZrtmWnZ5Frm09knxhuE6gbpDDQjOrBBjqkAS6AzxkZbGs05nrpGf4PS9h%2F%2Fvj7ORJE92ApcBb7rKcKvmegSjI6o90PD6y46IICw9vzL1%2BBvORwJtvHFQRxG867zO3tOjeezwnF%2F3J9YXv4MykqpvvKP9iCixyN8UKEPsp45Ae6w%2BlX5BWZ%2BUqCDufTTzQwsuZP6IXZTji4nPnKNdV1mB6ZljJgKjrJ7DswzfUQ6zJliFzA8JLpkB5IYf3K%2ByqN&X-Amz-Signature=04dd6b6f15acb4d9c03881acf79cc79e859525c4c26a4b137fd5ceb2e5b4e629&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
