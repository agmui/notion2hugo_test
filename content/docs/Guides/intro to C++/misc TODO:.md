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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZ53GPR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDKop9Y1wpj9dlH29xDsyvQDXVqz6nlxv2Az%2BLSM13ifwIgE7AJ77Iry92rSh0J1UrQ5AjhQZXHtNftEXCxrJFtH2UqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeQM6bvow%2BBYWInfCrcA3NiFrGxZ3BORzH5M8H%2FIR5ojBmualekLQoMY7DlU9OeUJnd5teMrOMXiiUZcYIZBNZ%2FS5IO3BMyssKzXRo0ZRRXqFQNkEACeeniCewy%2B0sbVakASfAg7jQ5rQcjYe6CpskO3sWp5NIWAfMvGmpuie8wTFznx1wqlDCkEHMRXHljGLW0cp%2B1N4x4gIh%2F9WEOAt64ImM6hwf5HCXy2qtHUGUjIYxKq8yY6eweNXtMMFZm1nUSe7Vpqj080%2BcKxrLDVsnBQfTmTCpfObjjh0fSc%2B93YkfCOPkWyY4gT8Ijerzw2xrKqGavr8PRf9ca0NUtxVdnFPBn0lUgJy%2B0xvyih5PrqiqPNu1%2BBhZUbu7lgmrYwXwSeGtZzOUz40PROa%2FcUW0UfutuFXWFBEKjDq3GtUfPmc5CeJ%2BbESVKNa6D1iRJNOVF7Ahs5%2FDiAOjkqtIEK9By5rBqyRpUWGd9c5lLP%2BiB7yYfdYHQ5lr6IStsldcnf1razCjjXVOnCn%2Bdm4hCeFQrK7Ouvyvo4lYtWDuLPAcwwF7UPi6kmEFbn9TV20n7byuzlORVIzLLTcLb6tBKRyPTwGZPwNGOPnunxMMjGwvW2iPflAdqLKKTXTck7xy8jlmxmWUrCSOsn48gMIPM%2F74GOqUBU2BeDpFPERYae0Rdz%2B8Xzb9l%2BjnkDbbN6bYv792MDo7zK5FcJfvTED1JTjiqMZAYJ3uTrL%2F7BWx94jcBviTBTEp%2Bmk314mK9yEVgFP%2F8QZxiR0SnJebYjSPKHqsAb02KonLuDzGcd2MFM1ExfzjN1a8a%2F34YS6ITm7TM2fw%2FEPF%2B%2FMD3xh3v%2BoMzHzYjdMZMykHeo7rNJcQS8s5Ck9W5fPbG%2FmOO&X-Amz-Signature=016c72072888a53d49eb4de0030991e3830d72e1fb27626b8bf5d8c1f4683985&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZ53GPR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDKop9Y1wpj9dlH29xDsyvQDXVqz6nlxv2Az%2BLSM13ifwIgE7AJ77Iry92rSh0J1UrQ5AjhQZXHtNftEXCxrJFtH2UqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeQM6bvow%2BBYWInfCrcA3NiFrGxZ3BORzH5M8H%2FIR5ojBmualekLQoMY7DlU9OeUJnd5teMrOMXiiUZcYIZBNZ%2FS5IO3BMyssKzXRo0ZRRXqFQNkEACeeniCewy%2B0sbVakASfAg7jQ5rQcjYe6CpskO3sWp5NIWAfMvGmpuie8wTFznx1wqlDCkEHMRXHljGLW0cp%2B1N4x4gIh%2F9WEOAt64ImM6hwf5HCXy2qtHUGUjIYxKq8yY6eweNXtMMFZm1nUSe7Vpqj080%2BcKxrLDVsnBQfTmTCpfObjjh0fSc%2B93YkfCOPkWyY4gT8Ijerzw2xrKqGavr8PRf9ca0NUtxVdnFPBn0lUgJy%2B0xvyih5PrqiqPNu1%2BBhZUbu7lgmrYwXwSeGtZzOUz40PROa%2FcUW0UfutuFXWFBEKjDq3GtUfPmc5CeJ%2BbESVKNa6D1iRJNOVF7Ahs5%2FDiAOjkqtIEK9By5rBqyRpUWGd9c5lLP%2BiB7yYfdYHQ5lr6IStsldcnf1razCjjXVOnCn%2Bdm4hCeFQrK7Ouvyvo4lYtWDuLPAcwwF7UPi6kmEFbn9TV20n7byuzlORVIzLLTcLb6tBKRyPTwGZPwNGOPnunxMMjGwvW2iPflAdqLKKTXTck7xy8jlmxmWUrCSOsn48gMIPM%2F74GOqUBU2BeDpFPERYae0Rdz%2B8Xzb9l%2BjnkDbbN6bYv792MDo7zK5FcJfvTED1JTjiqMZAYJ3uTrL%2F7BWx94jcBviTBTEp%2Bmk314mK9yEVgFP%2F8QZxiR0SnJebYjSPKHqsAb02KonLuDzGcd2MFM1ExfzjN1a8a%2F34YS6ITm7TM2fw%2FEPF%2B%2FMD3xh3v%2BoMzHzYjdMZMykHeo7rNJcQS8s5Ck9W5fPbG%2FmOO&X-Amz-Signature=e93cc3239ba0cee76c72899ebc89ee0cd0f9f93dc76a9ef69df4fa15f84062ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
