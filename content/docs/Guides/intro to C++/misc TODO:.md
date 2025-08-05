---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMTETJF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCMkA4TJ51GPDg%2BKGPHqHEZN6wpkXHK84huugRX%2F28wewIhAOAlXi9NgMTr8Hm6mugsf4Iv1Q6cPC%2FHstsclJcp0iuLKv8DCFAQABoMNjM3NDIzMTgzODA1Igx%2Bn%2Fn%2BfXufdVh4DBIq3AMTUHR%2Fo%2Fu5EIdhLA1%2Fh7GrfZIqWMG3o0ZxsdyHTxljuvbRqAa3jXaed7NtUkBnspg6%2F3FBehnGPpHQcQA1OdqeYdAl1asmA1tVPvNSnvYGi37n99cnWnuy4BhAoC5%2F0eks%2F4kP%2B%2FyLqxq4zLBnQnth3JnUtDx50al6yDbDF5wRbX%2Bn7NMl%2BLeGFjWmp%2B%2FLuh8Zi7gaUogKmaz%2FDfMl%2BkVV%2BffqRHiqDFMM4fppkv4caGp%2FsqhPzF2FmuEvSU3bKlk8Gltz7yLxj5vAJBFOpnNAbHk5mVLzNI55A9vLmRKJ6rbIykQ60KM5Z026et%2Bypy%2BvCSEAkOVipAlCplmIQjh3aNbCHFstfHzLE4GoICY07AiPJe2C9NnKXQpdkS1MFF3%2BKpH281OR4XGJVlqc4Lntr2SatgXZY4IUeQNyxpRkuyqWphV4%2Fo3T5WB51p6JZZT5Hsav7RJFVQLUMh4rIMqhlyrSMrGCAVhR6j6Qo82UCviGNf9O4DVsL8Dl%2FlVpqwQdPtNl0rIAvD4PH%2Bb6Pb%2FTJRi%2BlofSETMf0IdQ8bIkhHTvptBaGZANpkiVazGJkTjZ3a%2BI6Owoeboo%2FOgGjn8R4KAUjqYryS1cGzp%2B1nRKLkMmlaHWi%2BK6Hl%2B3ETDs9MTEBjqkAX1fZBvzHbgHlTawkN6RLCWjJnA%2BlvTsOryIduwcejuf75pqUBBWraINTEFbDOf5T8utvbfRiBHc5L6SS9Xo%2F535bf74aeoTH2lbXdbhhXXNp7rzMQ%2B49RynpQndn9hFOl4b1rFn1wbaulq5lCjonxSN9AuM06cwb%2BO9b83aHc6JPokRyqJtpCH%2FPAxp5J3uOzkfH%2FXamk2Gc72lk6djX4raSjCE&X-Amz-Signature=7b38ee0c6a44845a3e27d45dc1ac5b4802d1fced9474a57d1da3fd7bc3965129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMTETJF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCMkA4TJ51GPDg%2BKGPHqHEZN6wpkXHK84huugRX%2F28wewIhAOAlXi9NgMTr8Hm6mugsf4Iv1Q6cPC%2FHstsclJcp0iuLKv8DCFAQABoMNjM3NDIzMTgzODA1Igx%2Bn%2Fn%2BfXufdVh4DBIq3AMTUHR%2Fo%2Fu5EIdhLA1%2Fh7GrfZIqWMG3o0ZxsdyHTxljuvbRqAa3jXaed7NtUkBnspg6%2F3FBehnGPpHQcQA1OdqeYdAl1asmA1tVPvNSnvYGi37n99cnWnuy4BhAoC5%2F0eks%2F4kP%2B%2FyLqxq4zLBnQnth3JnUtDx50al6yDbDF5wRbX%2Bn7NMl%2BLeGFjWmp%2B%2FLuh8Zi7gaUogKmaz%2FDfMl%2BkVV%2BffqRHiqDFMM4fppkv4caGp%2FsqhPzF2FmuEvSU3bKlk8Gltz7yLxj5vAJBFOpnNAbHk5mVLzNI55A9vLmRKJ6rbIykQ60KM5Z026et%2Bypy%2BvCSEAkOVipAlCplmIQjh3aNbCHFstfHzLE4GoICY07AiPJe2C9NnKXQpdkS1MFF3%2BKpH281OR4XGJVlqc4Lntr2SatgXZY4IUeQNyxpRkuyqWphV4%2Fo3T5WB51p6JZZT5Hsav7RJFVQLUMh4rIMqhlyrSMrGCAVhR6j6Qo82UCviGNf9O4DVsL8Dl%2FlVpqwQdPtNl0rIAvD4PH%2Bb6Pb%2FTJRi%2BlofSETMf0IdQ8bIkhHTvptBaGZANpkiVazGJkTjZ3a%2BI6Owoeboo%2FOgGjn8R4KAUjqYryS1cGzp%2B1nRKLkMmlaHWi%2BK6Hl%2B3ETDs9MTEBjqkAX1fZBvzHbgHlTawkN6RLCWjJnA%2BlvTsOryIduwcejuf75pqUBBWraINTEFbDOf5T8utvbfRiBHc5L6SS9Xo%2F535bf74aeoTH2lbXdbhhXXNp7rzMQ%2B49RynpQndn9hFOl4b1rFn1wbaulq5lCjonxSN9AuM06cwb%2BO9b83aHc6JPokRyqJtpCH%2FPAxp5J3uOzkfH%2FXamk2Gc72lk6djX4raSjCE&X-Amz-Signature=e8fdd5d7954db052def947bf1c4eb4b18d5d22b89eee27b0caab99be8fb887c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
