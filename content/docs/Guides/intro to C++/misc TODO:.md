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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRV2CDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2BAwp%2Bd%2BDBab8JD6BRNdMzuk30Q2dkY%2FTeCVncCWgMwIhAPzT9jAhZdI7yXzyFxWHJghG7OcbUlU3%2BxbYZAkZmzOUKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlla1fH7lAgUVIINwq3AMROFMsXukKCpLn3NXzKgQsJexfck3NglJslXiM9YXof58LP6zX4SHLJ3hkKKwOAbH04%2B%2BAVeQA3pbPUpTBDEj1%2B2RqN8S0gh%2FSgy3qhCBNARD59%2BAIqB6J5t%2BuzOEysgrKbyhiFJPIt93xVNHOICLAlB8RgL2Eb6HdizstQNe%2FeYzEurQRirISi9Gpdiu5123rv9GVehSAF04DDN23kvfuqY%2BcV4ujcX4mkOojveZW6QlMRFXz6qF3DDYQmCCJYYtYqBOQDDIo6Qnj9hTNUmsiK6SSx3jWYHA4oTrn0QDS2k%2F7XAqfOnOxkM73c5wNXXFTS5G8hklnU%2BdNtUokiIxe7KVFMQfiTQ00fNbx2BjZaU6WIs1goA56IHHaTCFOKQZe5q98y%2BQ5TUMLuS5eBnac1eplfAYiHkD8JWHsZ%2BM%2BtKQTnPKRJnSzNwGmO5%2FkztcZxlmS8FUd7AO3Fw%2BLfPrO2N0BE44zbdskvfkUMnjjuOE3UWjILoHwr941qmuc6VlBcSUU7a%2Ff5isaPkLsvxQJazCCMGvP5KUysKfHZ4%2B99PJGtOyzY591yRDgTjPRiEDmppRDpzhuHW40FvkYAFlQSwjOykw1U8vHOycNmwv4zlouQQIXQfvhPP%2FurDCM%2FefBBjqkAb2mSxlHYMSJe4kQcWV3WqNOSc%2FkpcD3QUGElbdIxgZSkHa9E9cFHRTVp%2FB2XDthQ77yBZBSq%2BJ%2Fk42uV8c74cYcPDYJoDljUn0EVRUvmSGxV07hldgI9PgfZ8CMWItKC2UyJxA4CdJkU6jkWW%2BUZeen5LMMOqtHiqf9OoIsete1PX21hhal6u9fe20GRsTOSrgdIs0dSlRFNvrSNrnRP9ri8wos&X-Amz-Signature=f2cee068b95a6f025eb35cc7166059c50fcbaa38ad622a1028f3108168de099b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRV2CDC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2BAwp%2Bd%2BDBab8JD6BRNdMzuk30Q2dkY%2FTeCVncCWgMwIhAPzT9jAhZdI7yXzyFxWHJghG7OcbUlU3%2BxbYZAkZmzOUKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlla1fH7lAgUVIINwq3AMROFMsXukKCpLn3NXzKgQsJexfck3NglJslXiM9YXof58LP6zX4SHLJ3hkKKwOAbH04%2B%2BAVeQA3pbPUpTBDEj1%2B2RqN8S0gh%2FSgy3qhCBNARD59%2BAIqB6J5t%2BuzOEysgrKbyhiFJPIt93xVNHOICLAlB8RgL2Eb6HdizstQNe%2FeYzEurQRirISi9Gpdiu5123rv9GVehSAF04DDN23kvfuqY%2BcV4ujcX4mkOojveZW6QlMRFXz6qF3DDYQmCCJYYtYqBOQDDIo6Qnj9hTNUmsiK6SSx3jWYHA4oTrn0QDS2k%2F7XAqfOnOxkM73c5wNXXFTS5G8hklnU%2BdNtUokiIxe7KVFMQfiTQ00fNbx2BjZaU6WIs1goA56IHHaTCFOKQZe5q98y%2BQ5TUMLuS5eBnac1eplfAYiHkD8JWHsZ%2BM%2BtKQTnPKRJnSzNwGmO5%2FkztcZxlmS8FUd7AO3Fw%2BLfPrO2N0BE44zbdskvfkUMnjjuOE3UWjILoHwr941qmuc6VlBcSUU7a%2Ff5isaPkLsvxQJazCCMGvP5KUysKfHZ4%2B99PJGtOyzY591yRDgTjPRiEDmppRDpzhuHW40FvkYAFlQSwjOykw1U8vHOycNmwv4zlouQQIXQfvhPP%2FurDCM%2FefBBjqkAb2mSxlHYMSJe4kQcWV3WqNOSc%2FkpcD3QUGElbdIxgZSkHa9E9cFHRTVp%2FB2XDthQ77yBZBSq%2BJ%2Fk42uV8c74cYcPDYJoDljUn0EVRUvmSGxV07hldgI9PgfZ8CMWItKC2UyJxA4CdJkU6jkWW%2BUZeen5LMMOqtHiqf9OoIsete1PX21hhal6u9fe20GRsTOSrgdIs0dSlRFNvrSNrnRP9ri8wos&X-Amz-Signature=af7c3959e7a004300f089a3e0bf76eb7c3ad4ea3353a801def9ea51884187930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
