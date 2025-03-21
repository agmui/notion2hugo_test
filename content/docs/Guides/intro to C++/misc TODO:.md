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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HT4AON5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCvnVwqRph22mKIYqe8p2gqSedVYoSDVKCTdPgg4JKQEgIhANzYUQ6RR0Q3wjZ9mclBIjMJ30lhsABlZpfTigVMOVO%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVXeTDi3Azf5F%2B5LQq3APVXC9wVMoySMMcuGZiRCs0wVfLNEDOL8LKJeT3u0BwiYddsPxqhGwsXpcO9Z9OFkJWbhh1raLyoRsWrkIHhHmBcT65%2BDmqFO%2FAiZpXk0jzTgmZcM4zKQxcQFt9pWaUQ%2BlRQSkoOfic034OAlgOKpOXThy4yHVh%2FWA3jrNKdpKo15jh7VlQVur3DnbVjLd5wyTHuzOLiulkmobq2rkBB47gZS328ahS9QIVMw%2ByOVjcZyEY2o5O5W2zJovPzKiviidvH%2BGTL0WjqeyEroZ%2Bo497J7thnANREmBhVEOlsRuWCsug%2F21FXSowumpbsG%2FBKfs5YWDEJLD6SU1aWAu0ot9sh6kGOzWVKEOPPXIHe1pWt6V%2Fvo4CbEumMEq4csJ2t4CNprsxOyondvYKGPF7Y%2BE1zthdv351bb8vOl%2Fj9C6ObMZ5yX8Diq5P%2BCdyPW5GxX0tGOhQXt6StwHdklkG%2FjHqjyeFvJTID%2BNGj3zjixLZRG5DscS9UGWjbLQoR2sUDINo8wQIAsC2hGzglt%2Bvu9fnMS4l65GL4QH7cLIpbH7mmhl8reA6Seo40mXK5Lbg47hFmgu8opK20zF5e8TUYNdUQjn6JawSsdJexQ91AeiA46bdTcFv9alm49ZZsDCDm%2Fa%2BBjqkAZxMNBh9oOGaJAoSQnIYTWrmNNUh8mwVrnZw3xKGzEcelxZ3ym9cmbjdO%2BmxOXfyzC8MpnuwkozGCGq4oDR8yDTN3m895rcLiKKOSU5u6Vyo3ga2Zyf2MSep4zZcH%2BU8ySQ4tbX9H%2BktEZG9r3b3G5muF9WZA16RcepA9Vwgu1a83myIvHRF8lCHqp%2BjIXaWC5%2FCcy4SnnlCSWY8QI9VMsFXRDkU&X-Amz-Signature=4836ac27db186851afa5d56754c4b06aa97a20f1131f7d661ad96443e2b177ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HT4AON5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCvnVwqRph22mKIYqe8p2gqSedVYoSDVKCTdPgg4JKQEgIhANzYUQ6RR0Q3wjZ9mclBIjMJ30lhsABlZpfTigVMOVO%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVXeTDi3Azf5F%2B5LQq3APVXC9wVMoySMMcuGZiRCs0wVfLNEDOL8LKJeT3u0BwiYddsPxqhGwsXpcO9Z9OFkJWbhh1raLyoRsWrkIHhHmBcT65%2BDmqFO%2FAiZpXk0jzTgmZcM4zKQxcQFt9pWaUQ%2BlRQSkoOfic034OAlgOKpOXThy4yHVh%2FWA3jrNKdpKo15jh7VlQVur3DnbVjLd5wyTHuzOLiulkmobq2rkBB47gZS328ahS9QIVMw%2ByOVjcZyEY2o5O5W2zJovPzKiviidvH%2BGTL0WjqeyEroZ%2Bo497J7thnANREmBhVEOlsRuWCsug%2F21FXSowumpbsG%2FBKfs5YWDEJLD6SU1aWAu0ot9sh6kGOzWVKEOPPXIHe1pWt6V%2Fvo4CbEumMEq4csJ2t4CNprsxOyondvYKGPF7Y%2BE1zthdv351bb8vOl%2Fj9C6ObMZ5yX8Diq5P%2BCdyPW5GxX0tGOhQXt6StwHdklkG%2FjHqjyeFvJTID%2BNGj3zjixLZRG5DscS9UGWjbLQoR2sUDINo8wQIAsC2hGzglt%2Bvu9fnMS4l65GL4QH7cLIpbH7mmhl8reA6Seo40mXK5Lbg47hFmgu8opK20zF5e8TUYNdUQjn6JawSsdJexQ91AeiA46bdTcFv9alm49ZZsDCDm%2Fa%2BBjqkAZxMNBh9oOGaJAoSQnIYTWrmNNUh8mwVrnZw3xKGzEcelxZ3ym9cmbjdO%2BmxOXfyzC8MpnuwkozGCGq4oDR8yDTN3m895rcLiKKOSU5u6Vyo3ga2Zyf2MSep4zZcH%2BU8ySQ4tbX9H%2BktEZG9r3b3G5muF9WZA16RcepA9Vwgu1a83myIvHRF8lCHqp%2BjIXaWC5%2FCcy4SnnlCSWY8QI9VMsFXRDkU&X-Amz-Signature=da8923ae6c3c5cfbc49b271230399fd3560b7b139562831d1a81fe46598dc137&X-Amz-SignedHeaders=host&x-id=GetObject)

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
