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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIESVQU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA8zpVSV%2F7MFFO6xnXi0vQTdp3eyNgHUjzMmXiJrwNyqAiEA0CzJf%2BA11E9HjFIPuYhYgYfpCvFyXUFwmyXp%2FZLKqEMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlM8NjA5pW4Ao96MSrcAwzm7iP4dSb1MQNqsA6cxiMtaQgNUu3uCXXJ%2BEDmezPH0WHVBRQnOlDUDs5FHiqh76Djr1MPlpL%2Fd00%2FhDCY4ImB8y838gBVbD7kOmrUmUzHJI%2FjzaKTeyvJEfvUPz6uLA4aOZD8jN4t7CGZMdoiKOZjsmgfhj%2BEW%2FL%2B5W0Qonm310ysJOMV77cyTp54YXnmlFXDvk2jwePthdg8YNg6HAnILAupbEmpA%2FR6I0vn3%2Btm7AY90nyvwkJqJec1%2FJQpbXKKrRnqo6PVnHaKc8tk2x01vvE2%2FA4Or83lTu2OTKcjkPRU%2B9RLwVomtqUi9lKoNS6qrfjc2sLMmE4EB4iTnj7Wxk4y2SX3TwJQ9RCz%2FQDDDjnvOxxh3UEhK7taOj9zKUlMKfcC9fK6oYH5i%2BA3cGvWD%2FTImO3S8bU6k7D9tnIpJBOPNf%2FjncDYxas6o9rl9hleCsrpi7gSFHO9F5eTN4lCs%2BnSpKRli%2FAPylGii1mlqmKY4ic1ahKlA8PSSVEnAJ2KqhQ5ZcguaSiwuvJWwYkljjjyY6n4yErtae4iAu7%2B7Us6ywj3IxLzO7dUuHlZnOomhGEiNEm9yTxR3bLp1uh5OSHEFywjYxpvdDyxVhl2%2BrqanvrAAQqDG%2FcvML6NncQGOqUB0%2BloKMuPlPY%2BtKVir4aMqhuACGuA8mZabVqjLgbhH1y3WVHjRNmK8rNIIoHo2MDtFCAvv0EUfrXFhHy3gsgAtjpfytY4vuGqI9EzV0bSkZmZS1qmqi4ugVoLymSqOj4ROYKWbuvLbmzvf9Ia9iwGak2v6QBbV3ddDYIuqJW4e2x8dM5Q874ORPZSjiExkg9fuxdjGeC274N7ynzeB0lVuNjUingZ&X-Amz-Signature=f0528d35181910968cd9366e6ce36a1788cafaf8f8ec51c18ce4d01fbc56ce4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIESVQU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA8zpVSV%2F7MFFO6xnXi0vQTdp3eyNgHUjzMmXiJrwNyqAiEA0CzJf%2BA11E9HjFIPuYhYgYfpCvFyXUFwmyXp%2FZLKqEMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlM8NjA5pW4Ao96MSrcAwzm7iP4dSb1MQNqsA6cxiMtaQgNUu3uCXXJ%2BEDmezPH0WHVBRQnOlDUDs5FHiqh76Djr1MPlpL%2Fd00%2FhDCY4ImB8y838gBVbD7kOmrUmUzHJI%2FjzaKTeyvJEfvUPz6uLA4aOZD8jN4t7CGZMdoiKOZjsmgfhj%2BEW%2FL%2B5W0Qonm310ysJOMV77cyTp54YXnmlFXDvk2jwePthdg8YNg6HAnILAupbEmpA%2FR6I0vn3%2Btm7AY90nyvwkJqJec1%2FJQpbXKKrRnqo6PVnHaKc8tk2x01vvE2%2FA4Or83lTu2OTKcjkPRU%2B9RLwVomtqUi9lKoNS6qrfjc2sLMmE4EB4iTnj7Wxk4y2SX3TwJQ9RCz%2FQDDDjnvOxxh3UEhK7taOj9zKUlMKfcC9fK6oYH5i%2BA3cGvWD%2FTImO3S8bU6k7D9tnIpJBOPNf%2FjncDYxas6o9rl9hleCsrpi7gSFHO9F5eTN4lCs%2BnSpKRli%2FAPylGii1mlqmKY4ic1ahKlA8PSSVEnAJ2KqhQ5ZcguaSiwuvJWwYkljjjyY6n4yErtae4iAu7%2B7Us6ywj3IxLzO7dUuHlZnOomhGEiNEm9yTxR3bLp1uh5OSHEFywjYxpvdDyxVhl2%2BrqanvrAAQqDG%2FcvML6NncQGOqUB0%2BloKMuPlPY%2BtKVir4aMqhuACGuA8mZabVqjLgbhH1y3WVHjRNmK8rNIIoHo2MDtFCAvv0EUfrXFhHy3gsgAtjpfytY4vuGqI9EzV0bSkZmZS1qmqi4ugVoLymSqOj4ROYKWbuvLbmzvf9Ia9iwGak2v6QBbV3ddDYIuqJW4e2x8dM5Q874ORPZSjiExkg9fuxdjGeC274N7ynzeB0lVuNjUingZ&X-Amz-Signature=b703bf82adaed04a1bd4886b6662ca06dae549e9729329b610bd9e9c4352ccc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
